package com.shiqi.testquickjs

import android.content.Context
import android.os.Handler
import android.os.Looper
import android.util.Log
import com.shiqi.quickjs.JSContext
import com.shiqi.quickjs.JSDataException
import com.shiqi.quickjs.JSFunction
import com.shiqi.quickjs.JSRuntime
import com.shiqi.quickjs.JSString
import com.shiqi.quickjs.JSValue
import com.shiqi.quickjs.QuickJS
import java.io.File
import java.io.FileInputStream
import java.io.IOException

/**
 * 基于 QuickJS 实现的 XSonic JS 引擎
 *
 * 使用quickjs 引擎可能出现栈溢出问题，使用时需要业务方自行处理解决，建议优先使用V8引擎
 * 问题：https://github.com/seven332/quickjs-android/issues/12#issuecomment-900511908
 * 解决方案：https://github.com/seven332/quickjs-android/pull/21
 *
 * Created by tonycdchen on 2023/4/12.
 * Copyright (c) 2023 Tencent Music Entertainment Group. All rights reserved.
 */
class QuickJsEngine(private val context: Context) {

    companion object {
        private const val TAG = "QuickJSEngine"

        private const val URI_SCHEME_ASSETS = "asset:"

        private const val FUNCTION_PARAMS_INDEX_MODULE = 0
        private const val FUNCTION_PARAMS_INDEX_METHOD = 1
        private const val FUNCTION_PARAMS_INDEX_PARAMS = 2
        private const val FUNCTION_PARAMS_INDEX_CALLBACK_ID = 3
    }

    // QuickJS 运行时，可复用
    private lateinit var jsRuntime: JSRuntime

    // QuickJS 上下文，可复用
    private lateinit var jsContext: JSContext

    // JS 运行线程，所有跟 JS 相关的操作都必须在同一线程
    private val jsHandler: Handler by lazy {
        Handler(Looper.getMainLooper())
    }

    fun init() {
        val quickJS = QuickJS.Builder().build()
        try {
            jsRuntime = quickJS.createJSRuntime()
            jsRuntime.setMaxStackSize(0) // disable stack size limit check
        } catch (e: Throwable) {
            Log.e(TAG, "init: failed to create js runtime", e)
            return
        }
        try {
            jsContext = jsRuntime.createJSContext()
            setupConsole(jsContext)
        } catch (e: Throwable) {
            Log.e(TAG, "init: failed to create js context", e)
            return
        }
    }

    fun createJsContext(): JSContext {
        val quickJS = QuickJS.Builder().build()
        val jsRuntime = quickJS.createJSRuntime()
        jsRuntime.setMaxStackSize(0)
        return jsRuntime.createJSContext()
    }

    fun getJsContext(): JSContext {
        return jsContext
    }

    /**
     * Executes a JS script or bytecode file.
     * @param filePath JS script or bytecode file directory.
     */
    fun runJsFileFromAsset(filePath: String) {
        Log.i(TAG, "runFile: filePath=$filePath")
        val isBytecode = filePath.endsWith(".kbc1")

        if (isBytecode) {
            val bytecode = loadBytecodeFromAsset(filePath)
            if (bytecode == null || bytecode.isEmpty()) {
                Log.e(TAG, "runFile: bytecode is null or empty")
                return
            }
            val start = System.currentTimeMillis()
            Log.i(TAG, "runFile: start at $start")
            try {
                jsContext.evaluateBytecode(bytecode)
                Log.i(TAG, "runFile: run bytecode finished")
            } catch (e: Throwable) {
                Log.e(TAG, "runFile: failed to run bytecode", e)
            } finally {
                val currentTime = System.currentTimeMillis()
                Log.i(TAG, "runFile: currentTime: ${currentTime}, cost ${currentTime - start} ms")
            }
        } else {
            val script = getScriptFromAsset(filePath)
            if (script.isNullOrEmpty()) {
                Log.e(TAG, "runFile: script is null or empty")
                return
            }
            val bytes = jsContext.compileJsToBytecode(script)
            val start = System.currentTimeMillis()
            Log.i(TAG, "runFile: start at $start")
            if (filePath.contains("source")) {
                Log.i(TAG, "runFile: ${script.length}")
            }
            try {
                jsContext.evaluateBytecode(bytes)
                Log.i(TAG, "runFile: run js finished")
            } catch (e: Throwable) {
                Log.e(TAG, "runFile: failed to run js", e)
            } finally {
                Log.i(TAG, "runFile: cost ${System.currentTimeMillis() - start} ms")
            }
        }
    }

    /**
     * JS 引擎清理
     */
    fun destroy() {
        jsContext.close()
        jsRuntime.close()
    }

    /**
     * 从文件加载 JS 脚本内容
     * 支持绝对路径或者 content 开头的 URI 路径
     * @param filePath 文件路径
     * @return 读取到的 JS 脚本内容，可能为 null 货
     */
    private fun loadScriptFromFile(filePath: String): String? {
        val start = System.currentTimeMillis()
        Log.i(TAG, "loadScriptFromFile: start at $start")
        if (filePath.isEmpty()) {
            Log.e(
                TAG,
                "loadScriptFormFile: file path is empty, cost ${System.currentTimeMillis() - start}"
            )
            return null
        }
        val inputStream = try {
            val file = File(filePath)
            FileInputStream(file)
        } catch (e: Throwable) {
            Log.e(TAG, "loadScriptFromFile: failed to open inputStream", e)
            return null
        }
        val buffer = ByteArray(inputStream.available())
        inputStream.read(buffer)
        inputStream.close()
        return String(buffer, Charsets.UTF_8)
    }

    /**
     * 从 Asset 中加载 JS 脚本内容
     * @param fileName 文件名
     */
    fun getScriptFromAsset(fileName: String): String? {
        val start = System.currentTimeMillis()
        Log.i(TAG, "loadScriptFromAsset: start at $start")
        return if (!fileName.startsWith(URI_SCHEME_ASSETS)) {
            Log.e(TAG, "loadScriptFromAsset: failed to load script from asset")
            ""
        } else {
            val realFileName = fileName.replaceFirst(URI_SCHEME_ASSETS, "")
                .replaceFirst(File.separator, "")
            try {
                val inputStream = context.assets.open(realFileName)
                val buffer = ByteArray(inputStream.available())
                inputStream.read(buffer)
                inputStream.close()
                return String(buffer, Charsets.UTF_8)
            } catch (e: IOException) {
                Log.e(TAG, "loadScriptFromAsset: failed to load", e)
                return null
            }
        }
    }

    /**
     * Loads bytecode from an asset.
     * @param fileName File name.
     */
    private fun loadBytecodeFromAsset(fileName: String): ByteArray? {
        val start = System.currentTimeMillis()
        Log.i(TAG, "loadBytecodeFromAsset: start at $start")
        return if (!fileName.startsWith(URI_SCHEME_ASSETS)) {
            Log.e(TAG, "loadBytecodeFromAsset: failed to load bytecode from asset")
            null
        } else {
            val realFileName = fileName.replaceFirst(URI_SCHEME_ASSETS, "")
                .replaceFirst(File.separator, "")
            try {
                val inputStream = context.assets.open(realFileName)
                val buffer = ByteArray(inputStream.available())
                inputStream.read(buffer)
                inputStream.close()
                Log.i(TAG, "loadBytecodeFromAsset: end cost ${System.currentTimeMillis() - start}ms")
                return buffer
            } catch (e: IOException) {
                Log.e(TAG, "loadBytecodeFromAsset: failed to load", e)
                return null
            }
        }
    }

    fun callJs(callbackId: String, params: String) {
        jsHandler.post {
            val callJSFunction = try {
                jsContext.globalObject.getProperty("sonicCallJs").cast(JSFunction::class.java)
            } catch (e: JSDataException) {
                Log.e(TAG, "callJs: failed to get js function sonicCallJs", e)
                return@post
            }
            val start = System.currentTimeMillis()
            Log.i(TAG, "callJs: start at $start, cid=$callbackId, params=$params")
            val jsCallbackId = try {
                jsContext.createJSString(callbackId)
            } catch (e: Throwable) {
                Log.e(TAG, "callJs: failed to create jsCallbackId", e)
                return@post
            }
            val jsParams = try {
                jsContext.createJSString(params)
            } catch (e: Throwable) {
                Log.e(TAG, "callJs: failed to create jsParams", e)
                return@post
            }
            try {
                callJSFunction.invoke(jsContext.globalObject, arrayOf(jsCallbackId, jsParams))
            } catch (e: Throwable) {
                Log.e(TAG, "callJs: failed to call js", e)
            } finally {
                Log.i(TAG, "callJs: cost ${System.currentTimeMillis() - start} ms")
            }
            try {
                executePendingJob()
                Log.i(TAG, "callJs: cid=$callbackId execute finished")
            } catch (e: Throwable) {
                Log.e(TAG, "callJs: failed to execute pending job", e)
            }
        }
    }

    /**
     * 补充 JS 中的 console 实现
     */
    private fun setupConsole(jsContext: JSContext) {
        val console = jsContext.createJSObject()
        jsContext.globalObject.setProperty("console", console)
        val log = jsContext.createJSFunction { context, args ->
            val stringBuilder = StringBuilder()
            for (i in args.indices) {
                val arg = args[i].toJavaString()
                stringBuilder.append(arg).append(" ")
            }
            Log.i(TAG, "[console.log] ${stringBuilder.toString().trim()}")
            context.createJSUndefined()
        }
        val error = jsContext.createJSFunction { context, args ->
            val stringBuilder = StringBuilder()
            for (i in args.indices) {
                val arg = args[i].toJavaString()
                stringBuilder.append(arg).append(" ")
            }
            Log.e(TAG, "[console.error] ${stringBuilder.toString().trim()}")
            context.createJSUndefined()
        }
        console.setProperty("log", log)
        console.setProperty("error", error)
        Log.i(TAG, "setupConsole: finish")
    }

    /**
     * 循环调用 executePendingJob 直到没有需要继续执行的任务
     */
    private fun executePendingJob() {
        var hasPendingJob = true
        while (hasPendingJob) {
            hasPendingJob = jsContext.executePendingJob()
            if (!hasPendingJob) {
                Log.i(TAG, "executePendingJob: no pending job now")
            }
        }
    }

    /**
     * 将 JS 对象转换为 String
     * 只支持获取 String 内容，其他类型的数据会直接使用 toString 方法
     */
    private fun JSValue.toJavaString(): String {
        return try {
            this.cast(JSString::class.java).string
        } catch (e: JSDataException) {
            Log.e(TAG, "toJavaString: failed to cast", e)
            this.toString()
        }
    }

}
