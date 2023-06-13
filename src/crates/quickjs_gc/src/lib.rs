#![feature(offset_of)]

use std::ffi::CStr;
use std::mem::offset_of;
use std::os::raw::c_char;

macro_rules! c_str {
    ($literal:expr) => {
        unsafe { std::ffi::CStr::from_bytes_with_nul_unchecked(concat!($literal, "\0").as_bytes()) }
    };
}

#[repr(C)]
pub struct ListHead {
    prev: *mut ListHead,
    next: *mut ListHead,
}

#[repr(C)]
pub enum JSGCObjectTypeEnum {
    JsObject = 1,
    FunctionBytecode,
    Shape,
    VarRef,
    AsyncFunction,
    JsContext,
    Unknown,
}

#[repr(C)]
pub struct JSGCObjectHeader {
    ref_count: i32,
    gc_obj_type: JSGCObjectTypeEnum,
    mark: u8,
    dummy1: u8,
    dummy2: u16,
    link: ListHead,
}

impl ListHead {
    fn next(&self) -> &mut Self {
        unsafe { &mut *self.next }
    }
}

impl JSGCObjectHeader {
    pub fn print(&self) {
        let gc_obj_type_name = unsafe { CStr::from_ptr(get_gc_obj_type_name(&self.gc_obj_type)) };
        println!(
            "JSGCObjectHeader with ref_count: {} and gc_obj_type: {}",
            self.ref_count,
            gc_obj_type_name.to_string_lossy()
        );
    }
}

#[no_mangle]
pub extern "C" fn print_gc_objects(list_head: *mut ListHead) {
    let mut cur_node = unsafe { &mut *list_head };
    loop {
        unsafe {
            let gc_object = (cur_node as *mut ListHead as *mut u8)
                .offset(-(offset_of!(JSGCObjectHeader, link) as isize))
                as *mut JSGCObjectHeader;
            (*gc_object).print();
        }
        cur_node = cur_node.next();
        if cur_node as *const _ == list_head {
            break;
        }
    }
}

#[no_mangle]
pub extern "C" fn get_gc_obj_type_name(gc_obj_type: &JSGCObjectTypeEnum) -> *const c_char {
    match gc_obj_type {
        JSGCObjectTypeEnum::JsObject => c_str!("JS_OBJECT"),
        JSGCObjectTypeEnum::FunctionBytecode => c_str!("FUNCTION_BYTECODE"),
        JSGCObjectTypeEnum::Shape => c_str!("SHAPE"),
        JSGCObjectTypeEnum::VarRef => c_str!("VAR_REF"),
        JSGCObjectTypeEnum::AsyncFunction => c_str!("ASYNC_FUNCTION"),
        JSGCObjectTypeEnum::JsContext => c_str!("JS_CONTEXT"),
        _ => c_str!("UNKNOWN"),
    }
    .as_ptr()
}
