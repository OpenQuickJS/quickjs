package com.shiqi.testquickjs

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.shiqi.testquickjs.ui.theme.QuickJSTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val quickJSEngine = QuickJsEngine(baseContext)
        quickJSEngine.init()
        quickJSEngine.runJsFileFromAsset("asset:/JsEngineSonicBridge.js")
        quickJSEngine.runJsFileFromAsset("asset:/sonic.kbc1")
        quickJSEngine.runJsFileFromAsset("asset:/test.kbc1")
        quickJSEngine.runJsFileFromAsset("asset:/sonic.js")
        // quickJSEngine.runJsFileFromAsset("asset:/test.js")

        setContent {
            QuickJSTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
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