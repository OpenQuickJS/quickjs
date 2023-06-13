cmake_minimum_required(VERSION 3.9.4)
project(QUICKJS C)

set(C_STANDARD 17)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(MI_OVERRIDE OFF)

# config build target: "Debug" or "Release"
if (CMAKE_BUILD_TYPE STREQUAL "Debug")
    set(COMPILE_FLAGS ${COMPILE_FLAGS} -g)
elseif(CMAKE_BUILD_TYPE STREQUAL "Release")
    set(COMPILE_FLAGS ${COMPILE_FLAGS} -O3)
endif()

# add -lm if on Linux to handle math.h
# see: https://askubuntu.com/a/332919
if(CMAKE_SYSTEM_NAME STREQUAL "Linux")
    list(APPEND LINK_LIBRARIES "m")
endif()

# set OSX arch to x86_64 eve if on M1
# TODO: support cross-compiling for M1, android etc.
# https://corrosion-rs.github.io/corrosion/usage.html
set(CMAKE_OSX_ARCHITECTURES x86_64)

# enable interprocedural optimization (IPO/LTO) if supported
include(CheckIPOSupported)
check_ipo_supported(RESULT supported OUTPUT error)
if( supported AND NOT CMAKE_BUILD_TYPE STREQUAL "Debug")
   set(CMAKE_INTERPROCEDURAL_OPTIMIZATION TRUE)
endif()

# config binary output path: bin/
# config library output path: lib/
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)
set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)

# include c headers
include_directories(${PROJECT_SOURCE_DIR}/include)
include_directories(${PROJECT_SOURCE_DIR}/vendor/mimalloc/include)
include_directories(${PROJECT_SOURCE_DIR}/src/crates/include)
add_subdirectory(src)
add_subdirectory(vendor/mimalloc)

# compile flags
set(COMPILE_FLAGS -Wall -MMD -Wno-array-bounds -Wno-format-truncation)

add_compile_options(${COMPILE_FLAGS})
add_compile_definitions(
    _GNU_SOURCE
    CONFIG_BIGNUM
    CONFIG_VERSION=${QUICKJS_VERSION}
)

set(QJSC_CONFIG -DCONFIG_PREFIX="/usr/local" -DCONFIG_LTO)
set(QJSC_EXE "${EXECUTABLE_OUTPUT_PATH}/qjsc")
set(QJS_CONFIG ${QJSC_CONFIG} -DCONFIG_CC="clang")

# build qjsc (quickjs compiler)
add_executable(qjsc
        src/cli/qjsc.c
        src/cli/quickjs-libc.c
)
target_link_libraries(qjsc quickjs ${LINK_LIBRARIES} mimalloc-static)
target_compile_definitions(qjsc PUBLIC ${QJSC_CONFIG})

# build qjs (quickjs interpreter)
add_executable(qjs
        src/cli/qjs.c
        src/cli/quickjs-libc.c
        src/cli/repl.c
        src/cli/qjscalc.c
)
target_link_libraries(qjs quickjs ${LINK_LIBRARIES} mimalloc-static)

# build run-test262 (quickjs test262 runner)
add_executable(run-test262
        src/cli/run-test262.c
        src/cli/quickjs-libc.c
)
target_link_libraries(run-test262 quickjs ${LINK_LIBRARIES} mimalloc-static)

# generate repl.c and qjscalc.c
# enable it if you modified repl.js or qjscalc.js
# add_custom_command(
#     TARGET qjsc POST_BUILD
#     COMMAND ${QJSC_EXE} -c -o ${PROJECT_SOURCE_DIR}/repl.c -m ${PROJECT_SOURCE_DIR}/repl.js
#     COMMAND ${QJSC_EXE} -fbignum -c -o ${PROJECT_SOURCE_DIR}/qjscalc.c ${PROJECT_SOURCE_DIR}/qjscalc.js
# )

