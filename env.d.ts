// FIX: Resolve "File not found" error by providing reference paths for React's type dependencies.
// The TypeScript language server needs these to resolve imports inside the React type definitions.
// The `/// <reference path="..." />` directive with remote URLs is not standard and causes "File not found" errors.
// Replaced with `/// <reference types="..." />` which is the standard way to reference ambient type definitions.
/// <reference types="csstype" />
// FIX: Cannot find type definition file for 'prop-types'. This is commented out as it is causing an error
// and may not be required for a modern React + TypeScript application.
// /// <reference types="prop-types" />
/// <reference types="react" />
// FIX: Cannot find type definition file for 'react-dom'. This is commented out as the types are
// likely resolved from the `import 'react-dom/client'` statement in index.tsx.
// /// <reference types="react-dom" />
