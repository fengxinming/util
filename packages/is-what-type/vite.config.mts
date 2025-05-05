import { defineConfig } from 'vite';
import pluginBuildChuck from 'vite-plugin-build-chunk';
import pluginCombine from 'vite-plugin-combine';

import { camelize } from '../camel-kit/src/camelize';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginCombine({
      src: 'src/*.ts',
      target: 'src/index.ts',
      exports: 'all',
      dts: true
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
      entry: [],
      formats: ['es', 'cjs'],
      fileName: '[name]'
    },
    minify: false
  },
  test: {
    dir: './test'
  }
});
