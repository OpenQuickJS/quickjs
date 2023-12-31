#![feature(offset_of)]

mod record;

use std::mem::offset_of;
use crate::record::{get_gc_object_backtrace_map};
use quickjs_common::backtrace::Backtrace;

/// Represents a node in a doubly linked list.
/// Used to keep track of garbage-collected objects.
#[repr(C)]
pub struct ListHead {
    prev: *mut ListHead,
    next: *mut ListHead,
}

/// Represents the type of a garbage-collected object.
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

/// Header for garbage-collected objects.
/// These objects are C data structures with a reference count that can reference other GC objects.
#[repr(C)]
pub struct JSGCObjectHeader {
    ref_count: i32,
    gc_obj_mark: u8,
    dummy1: u8,
    dummy2: u16,
    link: ListHead,
}

impl ListHead {
    fn next(&mut self) -> &mut Self {
        unsafe { &mut *self.next }
    }
}

impl JSGCObjectHeader {
    /// Returns the GC object type as an enum value.
    fn gc_obj_type(&self) -> JSGCObjectTypeEnum {
        match self.gc_obj_mark & 0x0F {
            0 => JSGCObjectTypeEnum::JsObject,
            1 => JSGCObjectTypeEnum::FunctionBytecode,
            2 => JSGCObjectTypeEnum::Shape,
            3 => JSGCObjectTypeEnum::VarRef,
            4 => JSGCObjectTypeEnum::AsyncFunction,
            5 => JSGCObjectTypeEnum::JsContext,
            _ => JSGCObjectTypeEnum::Unknown,
        }
    }

    /// Returns the mark value from the GC object mark.
    pub fn mark(&self) -> u8 {
        (self.gc_obj_mark & 0xF0) >> 4
    }

    /// Prints the GC object details in a formatted output.
    pub fn print(&self) {
        let gc_obj_type_name = get_gc_obj_type_name(&self.gc_obj_type());
        println!(
            "{:?} {:<10} {:<20} {:<10} {:<10} {:<10}",
            self as *const _,
            self.ref_count,
            gc_obj_type_name,
            self.mark(),
            self.dummy1,
            self.dummy2
        );
    }

    /// Prints the GC object details in a formatted output, along with its backtrace if provided.
    pub fn print_with_backtrace(&self, bt: Option<&Backtrace>) {
        let gc_obj_type_name = get_gc_obj_type_name(&self.gc_obj_type());
        println!(
            "{:?} {:<10} {:<20} {:<10} {:<10} {:<10} {:<30}",
            self as *const _,
            self.ref_count,
            gc_obj_type_name,
            self.mark(),
            self.dummy1,
            self.dummy2,
            bt.map_or("N/A".to_string(), |b| format!("{:?}", b)),
        );
    }
}

/// Function that prints a GC object
///
/// # Safety
///
/// This function is `unsafe` because it dereferences a raw pointer. The caller
/// must ensure that the `gc_object` pointer points to a valid
/// `JSGCObjectHeader` object. Calling this function with an invalid pointer
/// leads to undefined behavior.
#[no_mangle]
pub unsafe extern "C" fn print_gc_object(gc_object: *mut JSGCObjectHeader) {
    // Ensure the pointer is not null
    if !gc_object.is_null() {
        // Dereference the pointer and print the object
        (*gc_object).print();
    }
}

/// Prints all GC objects in the list.
///
/// # Safety
///
/// This function is unsafe because it dereferences raw pointers. The caller
/// must ensure that `list_head` is a valid pointer to a `ListHead` object,
/// and that the list of GC objects is properly initialized.
#[no_mangle]
pub unsafe extern "C" fn print_gc_objects(list_head: *mut ListHead) {
    let mut cur_node = (*list_head).next();
    let map = get_gc_object_backtrace_map().lock().unwrap();
    let mut with_backtrace = 0;
    let mut without_backtrace = 0;

    println!(
        "{:<10} {:<10} {:<20} {:<10} {:<10} {:<10} {:<30}",
        "Node", "RefCount", "GC_Obj_Type", "Mark", "Dummy1", "Dummy2", "Backtrace"
    );

    let mut index: i32 = 0;
    while cur_node as *const _ != list_head {
        index += 1;
        let gc_object = (cur_node as *mut ListHead as *mut u8)
            .offset(-(offset_of!(JSGCObjectHeader, link) as isize))
            as *mut JSGCObjectHeader;

        match map.get(&(gc_object as *const _)) {
            Some(bt) => {
                (*gc_object).print_with_backtrace(Some(bt));
                with_backtrace += 1;
            }
            None => {
                (*gc_object).print_with_backtrace(None);
                without_backtrace += 1;
            }
        }
        cur_node = (*cur_node).next();
    }

    println!("\nTotal Nodes: {}", index);
    println!("Total with backtrace: {}", with_backtrace);
    println!("Total without backtrace: {}", without_backtrace);
    println!("Total GC-tracked Objects With Backtrace: {}", map.len());
}

/// Returns a string representation of the given GC object type.
fn get_gc_obj_type_name(gc_obj_type: &JSGCObjectTypeEnum) -> String {
    match gc_obj_type {
        JSGCObjectTypeEnum::JsObject => "JS_OBJECT".to_string(),
        JSGCObjectTypeEnum::FunctionBytecode => "FUNCTION_BYTECODE".to_string(),
        JSGCObjectTypeEnum::Shape => "SHAPE".to_string(),
        JSGCObjectTypeEnum::VarRef => "VAR_REF".to_string(),
        JSGCObjectTypeEnum::AsyncFunction => "ASYNC_FUNCTION".to_string(),
        JSGCObjectTypeEnum::JsContext => "JS_CONTEXT".to_string(),
        _ => "UNKNOWN".to_string(),
    }
}
