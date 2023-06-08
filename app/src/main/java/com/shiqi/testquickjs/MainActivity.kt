package com.shiqi.testquickjs

import android.os.Bundle
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

        val quickJSEngine = QuickJsEngine(baseContext)
        quickJSEngine.init()
        // quickJSEngine.runJsFileFromAsset("asset:/test.js")

        setContent {
            QuickJSTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
                    Button(onClick = {
                        // quickJSEngine.runJsFileFromAsset("asset:/JsEngineSonicBridge.js")
                        quickJSEngine.runJsFileFromAsset("asset:/sonic.js")
                        // val bytes = quickJSEngine.getJsContext().compileJsToBytecode("console.log('Hello, Shiqi!')")
                        // quickJSEngine.getJsContext().evaluateBytecode(bytes)

                        // Log.i(TAG, "bytes: ${bytes?.size}")
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