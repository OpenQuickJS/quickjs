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
import kotlinx.coroutines.NonCancellable.start

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

        val quickJSEngine = QuickJsEngine(applicationContext)
        quickJSEngine.init()
        val script = quickJSEngine.getScriptFromAsset("asset:/sonic.js")

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
                            val bytes = quickJSEngine.getJsContext().compileJsToBytecode(script)
                            val startTime = System.currentTimeMillis()
                            Log.i(TAG,"start: $startTime")
                            quickJSEngine.getJsContext().evaluateBytecode(bytes)
                            Log.i(TAG, "end, cost: ${System.currentTimeMillis() - startTime}ms")
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