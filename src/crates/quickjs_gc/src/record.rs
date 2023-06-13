use std::mem::offset_of;
use backtrace::Backtrace;
use crate::{JSGCObjectHeader, ListHead, print_gc_objects};

// Global GC objects map
lazy_static::lazy_static! {
    static ref GC_OBJECTS: Mutex<HashMap<*const JSGCObjectHeader, Backtrace>> = Mutex::new(HashMap::new());
}

/// Records the creation of a new GC object in the global map.
///
/// # Safety
///
/// This function is `unsafe` because it takes a raw pointer.
/// The caller must ensure that `gc_object` is a valid pointer.
#[no_mangle]
pub unsafe extern "C" fn record_gc_object_creation(gc_object: *mut JSGCObjectHeader) {
    let bt = Backtrace::new();
    GC_OBJECTS.lock().unwrap().insert(gc_object, bt);
}

/// Prints the details of leaked GC objects, if any.
#[no_mangle]
pub extern "C" fn get_leaked_gc_objects() {
    unsafe {
        print_gc_objects(list_head);

        // Leverage the `print_gc_objects` function to access each object
        // in the list, and compare it with the objects in the map.
        let map = GC_OBJECTS.lock().unwrap();
        for (&gc_object, bt) in map.iter() {
            if !is_in_list(list_head, gc_object) {
                // This object is not in the list, so it must be leaked.
                println!("Leaked GC object at address {:?} with backtrace:\n{:?}", gc_object, bt);
            }
        }
    }
}

/// Checks if the given GC object is in the list.
///
/// # Safety
///
/// This function is `unsafe` because it takes a raw pointer and dereferences it.
/// The caller must ensure that both `list_head` and `gc_object` are valid pointers.
unsafe fn is_in_list(list_head: *mut ListHead, gc_object: *const JSGCObjectHeader) -> bool {
    let mut cur_node = (*list_head).next();
    while cur_node as *const _ != list_head {
        let cur_gc_object = (cur_node as *mut ListHead as *mut u8)
            .offset(-(offset_of!(JSGCObjectHeader, link) as isize))
            as *mut JSGCObjectHeader;
        if cur_gc_object == gc_object {
            return true;
        }
        cur_node = (*cur_node).next();
    }
    false
}
