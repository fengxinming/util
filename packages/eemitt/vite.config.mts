import ts from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';
import pluginBuildChuck from 'vite-plugin-build-chunk';

import { camelize } from '../camel-kit/src/camelize';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ts({
      tsconfig: './tsconfig.build.json'
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
  }
});
