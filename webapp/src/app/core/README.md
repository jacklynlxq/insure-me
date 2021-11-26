## Core Module

 Contains root-scoped services, static components like the navbar and footer, interceptors, guard, constants, enums, utils, and universal models.

 To prevent re-importing the module elsewhere, we should add a `module-import-guard` in it’s constructor method.