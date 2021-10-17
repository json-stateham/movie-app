import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

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
  // resolve: {
  //   alias: {
  //     '': path.resolve(__dirname, 'src/'),
  //   },
  // },
  server: {
    fs: {
      strict: false,
    },
  },
})
