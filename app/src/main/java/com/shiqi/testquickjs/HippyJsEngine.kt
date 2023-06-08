package com.shiqi.testquickjs
import android.content.Context
import android.content.res.Configuration
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.os.Message
import android.text.TextUtils
import android.util.Log
import com.tencent.mtt.hippy.*
import com.tencent.mtt.hippy.bridge.HippyBridge
import com.tencent.mtt.hippy.bridge.HippyBridgeImpl
import com.tencent.mtt.hippy.bridge.HippyBridgeManager
import com.tencent.mtt.hippy.bridge.NativeCallback
import com.tencent.mtt.hippy.bridge.libraryloader.LibraryLoader
import com.tencent.mtt.hippy.common.HippyArray
import com.tencent.mtt.hippy.common.HippyMap
import com.tencent.mtt.hippy.common.ThreadExecutor
import com.tencent.mtt.hippy.devsupport.DevSupportManager
import com.tencent.mtt.hippy.dom.DomManager
import com.tencent.mtt.hippy.modules.HippyModuleManager
import com.tencent.mtt.hippy.uimanager.RenderManager
import com.tencent.mtt.hippy.utils.*
import java.nio.charset.StandardCharsets
import java.util.concurrent.atomic.AtomicBoolean

/**
 * Description :
 *
 * @Author : robertrchen
 * @Date : 2022/7/26
 */
class HippyJsEngine(private val context: Context) : HippyBridge.BridgeCallback {
    companion object {

        private const val TAG = "QuickJs HippyJsEngine"

        private const val URI_SCHEME_FILE = "file:"
        private const val URI_SCHEME_ASSETS = "asset:"

        private val loaded = AtomicBoolean(false)

        private fun loadHippy() {
            if (loaded.compareAndSet(false, true)) {
                LibraryLoader.loadLibraryIfNeed()
            }
        }
    }

    private var bridge: HippyBridgeImpl? = null

    private fun getCurrentHandler(): Handler {
        return Handler(Looper.myLooper() ?: Looper.getMainLooper())
    }

    fun init() {
        loadHippy()
        val hippyContext = HippyContext(context)
        ContextHolder.initAppContext(hippyContext.getContext())
        val v8InitParams = HippyEngine.V8InitParams()
        bridge = HippyBridgeImpl(
            hippyContext,
            this,
            false,
            false,
            false,
            "",
            v8InitParams
        ).also { bridge ->
            bridge.initJSBridge(
                getGlobalConfigs(hippyContext),
                object : NativeCallback(getCurrentHandler()) {
                    override fun Call(
                        result: Long,
                        message: Message?,
                        action: String?,
                        reason: String?
                    ) {
                        Log.i(TAG, "hippy init: ${result == 0L}")

                        runJsFile("asset:/sonic.js", true)
                    }
                }, -1
            )
        }
    }

    fun runJsFile(
        jsFilePath: String,
        isAssetFile: Boolean,
    ) {
        bridge?.let {
            val startTime = System.currentTimeMillis()
            val nativeCallback = object : NativeCallback(getCurrentHandler()) {
                override fun Call(
                    result: Long,
                    message: Message?,
                    action: String?,
                    reason: String?
                ) {
                    Log.i(TAG, "hippy v8 eval, cost: ${System.currentTimeMillis() - startTime}ms ${result == 0L}")
                }
            }
            if (isAssetFile) {
                val uri =
                    if (jsFilePath.startsWith(URI_SCHEME_ASSETS)) jsFilePath else URI_SCHEME_ASSETS + jsFilePath
                it.runScriptFromUri(uri, context.assets, false, "", nativeCallback)

            } else {
                val uri =
                    if (jsFilePath.startsWith(URI_SCHEME_FILE)) jsFilePath else URI_SCHEME_FILE + jsFilePath
                it.runScriptFromUri(uri, null, false, "", nativeCallback)
            }
        }
    }
    private fun getGlobalConfigs(hippyContext: HippyContext): String {
        val context: Context = hippyContext.getContext()
        val globalParams = HippyMap()
        val dimensionMap = DimensionsUtil.getDimensions(-1, -1, context, false)
        globalParams.pushMap("Dimensions", dimensionMap)
        var packageName = ""
        var versionName = ""
        val extraDataMap = HippyMap()
        try {
            val packageManager = context.packageManager
            val packageInfo = packageManager.getPackageInfo(context.packageName, 0)
            if (TextUtils.isEmpty(packageName)) {
                packageName = packageInfo.packageName
            }
            if (TextUtils.isEmpty(versionName)) {
                versionName = packageInfo.versionName
            }
        } catch (var11: Exception) {
            var11.printStackTrace()
        }
        val platformParams = HippyMap()
        platformParams.pushString("OS", "android")
        platformParams.pushString("PackageName", packageName)
        platformParams.pushString("VersionName", versionName)
        platformParams.pushInt("APILevel", Build.VERSION.SDK_INT)
        platformParams.pushBoolean("NightMode", this.getNightMode())
        val Localization = HippyMap()
        Localization.pushString("language", I18nUtil.getLanguage())
        Localization.pushString("country", I18nUtil.getCountry())
        Localization.pushInt("direction", I18nUtil.getLayoutDirection())
        platformParams.pushMap("Localization", Localization)
        globalParams.pushMap("Platform", platformParams)
        val tkd = HippyMap()
        tkd.pushString("appName", packageName ?: "")
        tkd.pushString("appVersion", versionName ?: "")
        tkd.pushMap("extra", extraDataMap)
        globalParams.pushMap("tkd", tkd)
        return ArgumentUtils.objectToJson(globalParams)
    }

    private fun getNightMode(): Boolean {
        return when ((context.resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK)) {
            Configuration.UI_MODE_NIGHT_UNDEFINED ->
                false
            Configuration.UI_MODE_NIGHT_NO ->
                false
            Configuration.UI_MODE_NIGHT_YES ->
                true
            else -> false
        }
    }

    class HippyContext(private val context: Context) : HippyEngineContext {

        private val config: HippyGlobalConfigs

        init {
            val initParams = HippyEngine.EngineInitParams()
            initParams.context = context
            config = HippyGlobalConfigs(initParams)
        }

        fun getContext() = context

        override fun getComponentName(): String {
            return ""
        }

        override fun getGlobalConfigs(): HippyGlobalConfigs {
            return config
        }

        override fun getModuleManager(): HippyModuleManager? {
            return null
        }

        override fun getBridgeManager(): HippyBridgeManager? {
            return null
        }

        override fun getDevSupportManager(): DevSupportManager? {
            return null
        }

        override fun getThreadExecutor(): ThreadExecutor? {
            return null
        }

        override fun getDomManager(): DomManager? {
            return null
        }

        override fun getRenderManager(): RenderManager? {
            return null
        }

        override fun getInstance(id: Int): HippyRootView? {
            return null
        }

        override fun addInstanceLifecycleEventListener(listener: HippyInstanceLifecycleEventListener?) {
        }

        override fun removeInstanceLifecycleEventListener(listener: HippyInstanceLifecycleEventListener?) {
        }

        override fun addEngineLifecycleEventListener(listener: HippyEngineLifecycleEventListener?) {
        }

        override fun removeEngineLifecycleEventListener(listener: HippyEngineLifecycleEventListener?) {
        }

        override fun handleException(throwable: Throwable?) {
        }

        override fun getStartTimeMonitor(): TimeMonitor? {
            return null
        }

        override fun getEngineId(): Int {
            return 0
        }
    }

    override fun callNatives(
        moduleName: String?,
        moduleFunc: String?,
        callId: String?,
        params: HippyArray?
    ) {
        TODO("Not yet implemented")
    }

    override fun reportException(message: String?, stackTrace: String?) {
        TODO("Not yet implemented")
    }

    override fun reportException(e: Throwable?) {
        TODO("Not yet implemented")
    }

}
