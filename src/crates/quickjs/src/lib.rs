pub use quickjs_gc;
pub use quickjs_gc::{JSGCObjectHeader, JSGCObjectTypeEnum, ListHead};
pub use std::os::raw::c_char;

pub extern "C" fn get_gc_obj_type_name(gc_obj_type: &JSGCObjectTypeEnum) -> *const c_char {
    quickjs_gc::get_gc_obj_type_name(gc_obj_type)
}

pub extern "C" fn print_gc_objects(list_head: *mut ListHead) {
    quickjs_gc::print_gc_objects(list_head)
}
