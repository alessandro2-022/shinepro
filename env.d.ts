// FIX: Resolve "File not found" error by providing reference paths for React's type dependencies.
// The TypeScript language server needs these to resolve imports inside the React type definitions.
// The `/// <reference path="..." />` directive with remote URLs is not standard and causes "File not found" errors.
// Replaced with `/// <reference types="..." />` which is the standard way to reference ambient type definitions.
/// <reference types="csstype" />
/// <reference types="prop-types" />
/// <reference types="react" />
/// <reference types="react-dom" />
