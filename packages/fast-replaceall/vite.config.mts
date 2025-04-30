import { defineConfig } from 'vite';
import pluginBuildChuck from 'vite-plugin-build-chunk';
import dts from 'vite-plugin-dts';

import { camelize } from '../camel-kit/src/camelize';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: 'src/index.ts'
    }),
    pluginBuildChuck({
      build: {
        chunk: 'index.mjs',
        format: 'umd',
        minify: false,
        name: camelize(name, { pascalCase: true })
      }
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: '[name]'
    },
    minify: false
  },
  test: {
    dir: 'test'
  }
});
