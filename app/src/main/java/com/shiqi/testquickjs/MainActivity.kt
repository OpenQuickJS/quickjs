package com.shiqi.testquickjs

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.shiqi.quickjs.QuickJS
import com.shiqi.testquickjs.ui.theme.QuickJSTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val quickJS = QuickJS.Builder().build()
        quickJS.createJSRuntime().use { runtime ->
            runtime.createJSContext().use { context ->
                val script1 = "" +
                        "function fibonacci(n) {" +
                        "  if (n == 0 || n == 1) return n;" +
                        "  return fibonacci(n - 1) + fibonacci(n - 2);" +
                        "}"
                // Evaluate a script without return value
                context.evaluate(script1, "fibonacci.js")
                val script2 = "fibonacci(10);"
                // Evaluate a script with return value
                val result =
                    context.evaluate(script2, "fibonacci.js", Int::class.javaPrimitiveType)
                Log.i("QuickJs", "result $result") // 55
            }
        }

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