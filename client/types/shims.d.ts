
// Minimal TypeScript shims for React and common libs to reduce immediate editor
// errors while `node_modules` isn't installed. These are temporary and should be
// removed when real package types are available.

declare module 'react' {
  // Basic React node/type
  export type ReactNode = any;
  export type Key = string | number;

  // Basic hooks (loose typings)
  export function useState<T = any>(initial?: T | (() => T)): [T, (v: any) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T = any>(initial?: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(fn: T, deps?: any[]): T;
  export function useMemo<T>(fn: () => T, deps?: any[]): T;

  // JSX support
  export const Fragment: any;

  // Allow import * as React
  export as namespace React;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props?: any, key?: any): any;
  export function jsxs(type: any, props?: any, key?: any): any;
  export function jsxDEV(type: any, props?: any, key?: any): any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react-dom/client' {
  export function createRoot(el: any): { render(node: any): void };
}

declare module 'react-router-dom' {
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export const Link: any;
  export const useNavigate: any;
}

declare module '@tanstack/react-query' {
  export const QueryClient: any;
  export const QueryClientProvider: any;
}

// Fallback for any other modules to avoid cascading editor errors.
declare module '*';
