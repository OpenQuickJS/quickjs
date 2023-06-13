extern crate quickjs_common;

use quickjs_common::backtrace::Backtrace;
use quickjs_common::libc::c_char;
use std::ffi::CString;

/// Function that captures a backtrace and returns it as a C-compatible string.
///
/// This function captures the current backtrace, formats it as a string,
/// converts it to a C-compatible string (CString), and then returns the raw
/// pointer to this string.
///
/// # Returns
///
/// * `*mut c_char`: Pointer to the backtrace string. This memory should be
///   freed by `free_backtrace_string` when it's no longer needed.
#[no_mangle]
pub extern "C" fn get_backtrace() -> *mut c_char {
    let bt = Backtrace::new();
    let trace_str = format!("{:?}", bt);

    // Convert the Rust String into a C string
    let c_string = CString::new(trace_str).unwrap();

    // Return a pointer to the C string
    c_string.into_raw()
}

/// Function that frees a string returned by `get_backtrace`.
///
/// This function takes a pointer to a C-compatible string, reconstitutes the
/// CString, and then drops it, which deallocates the memory. It's crucial to
/// call this function to avoid a memory leak.
///
/// # Parameters
///
/// * `ptr: *mut c_char`: Pointer to the string to free. If this pointer is null,
///   the function does nothing.
#[no_mangle]
pub extern "C" fn free_backtrace_string(ptr: *mut c_char) {
    unsafe {
        if ptr.is_null() {
            return;
        }
        drop(CString::from_raw(ptr))
    }
}
