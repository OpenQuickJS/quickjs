package com.shiqi.testquickjs

import android.os.Bundle
import android.os.Handler
import android.os.HandlerThread
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.shiqi.testquickjs.ui.theme.QuickJSTheme

class MainActivity : ComponentActivity() {
    companion object {
        const val TAG = "QuickJs"
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Create a new HandlerThread
        val handlerThread = HandlerThread("JsThread").apply { start() }

        // Create a Handler associated with the HandlerThread
        val handler = Handler(handlerThread.looper)

        setContent {
            QuickJSTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
                    Button(onClick = {
                        // Post a task to the Handler to run on the HandlerThread
                        handler.post {
                            // v8
                            val hippyJsInitStart = System.currentTimeMillis()
                            val hippyJsEngine = HippyJsEngine(applicationContext)
                            hippyJsEngine.init()
                            val hippyJsInitEnd = System.currentTimeMillis()
                            Log.i(TAG, "v8 init cost: ${hippyJsInitEnd - hippyJsInitStart}ms")

                            // quickjs
                            val quickJsInitStart = System.currentTimeMillis()
                            val quickJSEngine = QuickJsEngine(applicationContext)
                            quickJSEngine.init()
                            val quickJsInitEnd = System.currentTimeMillis()
                            Log.i(TAG, "quickjs init cost: ${quickJsInitEnd - quickJsInitStart}ms")

                            val script = quickJSEngine.getScriptFromAsset("asset:/sonic.js")

                            val jsContext = quickJSEngine.createJsContext()
                            val quickJsScriptStartTime = System.currentTimeMillis()
                            jsContext.evaluate(script, "file.js")
                            val quickJsScriptEndTime = System.currentTimeMillis()
                            Log.i(TAG, "quickjs script cost: ${quickJsScriptEndTime - quickJsScriptStartTime}ms")

                            val bytes = quickJSEngine.getJsContext().compileJsToBytecode(script)
                            val startTime = System.currentTimeMillis()
                            quickJSEngine.getJsContext().evaluateBytecode(bytes)
                            Log.i(TAG, "quickjs eval, cost: ${System.currentTimeMillis() - startTime}ms")

                        }
                    }) {
                        Text("Click Me")
                    }
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    QuickJSTheme {
        Greeting("Android")
    }
}