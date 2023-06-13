include(FetchContent)

FetchContent_Declare(
        Corrosion
        GIT_REPOSITORY https://github.com/corrosion-rs/corrosion.git
        GIT_TAG v0.4.1
)
FetchContent_MakeAvailable(Corrosion)

# config build target: "Debug" or "Release"
if (CMAKE_BUILD_TYPE STREQUAL "Debug")
    set(COMPILE_FLAGS ${COMPILE_FLAGS} -g)
elseif(CMAKE_BUILD_TYPE STREQUAL "Release")
    set(COMPILE_FLAGS ${COMPILE_FLAGS} -O3)
endif()

add_custom_target(
    RustLibs ALL
    COMMAND cargo build $<$<CONFIG:Release>:--release>
    WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}/src/crates/quickjs
)

add_library(quickjs
    libbf.c
    cutils.c
    libregexp.c
    libunicode.c
    core/string.c
    core/function.c
    core/memory.c
    core/bytecode.c
    core/object.c
    core/exception.c
    core/gc.c
    core/malloc.c
    core/shape.c
    core/parser.c
    core/convertion.c
    core/runtime.c
    core/module.c
    core/ic.c
    core/builtins/js-array.c
    core/builtins/js-async-function.c
    core/builtins/js-async-generator.c
    core/builtins/js-atomics.c
    core/builtins/js-big-num.c
    core/builtins/js-boolean.c
    core/builtins/js-date.c
    core/builtins/js-function.c
    core/builtins/js-generator.c
    core/builtins/js-json.c
    core/builtins/js-map.c
    core/builtins/js-math.c
    core/builtins/js-number.c
    core/builtins/js-object.c
    core/builtins/js-closures.c
    core/builtins/js-operator.c
    core/builtins/js-promise.c
    core/builtins/js-proxy.c
    core/builtins/js-reflect.c
    core/builtins/js-regexp.c
    core/builtins/js-string.c
    core/builtins/js-symbol.c
    core/builtins/js-typed-array.c

    # misc
    core/misc/debug.c
)

corrosion_import_crate(MANIFEST_PATH ${CMAKE_SOURCE_DIR}/src/crates/Cargo.toml)
target_link_libraries(quickjs quickjs_rust)

set(QUICKJS_VERSION STRING "0.1.0")

add_compile_options(${COMPILE_FLAGS})

# Debug on release
if (CONFIG_DEBUG_ON_RELEASE)
    add_compile_definitions(CONFIG_DEBUG_ON_RELEASE)
endif()

# Debug on release
if (CONFIG_DEBUG_ON_RELEASE)
    target_compile_options(quickjs PUBLIC
        -DCONFIG_DEBUG_ON_RELEASE
    )
endif()

target_compile_options(quickjs PUBLIC
    -D_GNU_SOURCE
    -DCONFIG_BIGNUM
    -DCONFIG_VERSION=${\"QUICKJS_VERSION\"}
)