// FIX: Resolve "File not found" error by providing reference paths for React's type dependencies.
// The TypeScript language server needs these to resolve imports inside the React type definitions.
/// <reference path="https://cdn.jsdelivr.net/npm/csstype@3.1.3/index.d.ts" />
/// <reference path="https://cdn.jsdelivr.net/npm/@types/prop-types@15.7.12/index.d.ts" />
/// <reference path="https://cdn.jsdelivr.net/npm/@types/react@18.3.3/index.d.ts" />
/// <reference path="https://cdn.jsdelivr.net/npm/@types/react-dom@18.3.0/index.d.ts" />
