use std::collections::HashMap;
use std::mem::offset_of;
use std::sync::{Mutex, Once};
use quickjs_common::backtrace::Backtrace;
use crate::{JSGCObjectHeader, ListHead};

// Define a global static Once variable and a static mutable option of the Mutexed HashMap
static INIT: Once = Once::new();
static mut GC_OBJECTS: Option<Mutex<HashMap<*const JSGCObjectHeader, Backtrace>>> = None;

// Function to safely initialize and get a reference to the global
// HashMap storing garbage-collected objects and their backtraces.
pub fn get_gc_object_backtrace_map() -> &'static Mutex<HashMap<*const JSGCObjectHeader, Backtrace>> {
    unsafe {
        INIT.call_once(|| {
            GC_OBJECTS = Some(Mutex::new(HashMap::new()));
        });
        GC_OBJECTS.as_ref().unwrap()
    }
}

// This function records the creation of a garbage-collected object.
// It takes a raw pointer to the object and stores it along with a
// backtrace in a global HashMap.
#[no_mangle]
pub unsafe extern "C" fn record_gc_object_creation(gc_object_link: *mut ListHead) {
    // Convert the pointer to the 'link' field back to a pointer to the encompassing struct
    let gc_object = (gc_object_link as *mut u8)
        .offset(-(offset_of!(JSGCObjectHeader, link) as isize))
        as *mut JSGCObjectHeader;

    let bt = Backtrace::new();
    get_gc_object_backtrace_map().lock().unwrap().insert(gc_object, bt);
}
