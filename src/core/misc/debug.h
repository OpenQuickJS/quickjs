#ifdef CONFIG_DEBUG_ON_RELEASE 

#include <stdio.h>
#include <stdarg.h>

void __internal_debug_log(const char* fmt, ...);

#endif
