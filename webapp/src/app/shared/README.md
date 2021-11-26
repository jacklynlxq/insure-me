## Shared Module

Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.

When working on large applications, the Angular team suggest us to consider lazy loading of our modules. This decreases the bundle size of our application and therefore the initial build-time, and this is where the SharedModule truly shines.

The shared module shouldn’t have any dependency to the rest of the application, and should therefore not rely on any other module.