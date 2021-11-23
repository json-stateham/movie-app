import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

/*
 *  https://vitejs.dev/config/
 */

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    reactRefresh({
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      include: '**/*.tsx',
    }),
    tsconfigPaths(),
  ],
  envPrefix: 'APP',
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
})
