import { defineConfig } from 'vite';

export default defineConfig({
    esbuild: {
        jsx: "transform",
        jsxDev: false,
        jsxImportSource: "solojsx",
        jsxInject: `import solojsx from 'solojsx'`,
        jsxFactory: "solojsx"
    }
});