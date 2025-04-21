import ts from '@rollup/plugin-typescript';
import camelcase from 'camelcase';
import { defineConfig } from 'vite';
import pluginBuildChunk from 'vite-plugin-build-chunk';
import pluginCombine from 'vite-plugin-combine';
import pluginExternal from 'vite-plugin-external';

import { name } from './package.json';

const globalName = camelcase(name, { pascalCase: true });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginCombine({
      src: 'src/*.ts',
      target: 'src/index.ts',
      exports: 'all'
    }),
    ts({
      tsconfig: './tsconfig.build.json'
    }),
    pluginExternal({
      nodeBuiltins: true
    }),
    pluginBuildChunk({
      logLevel: 'TRACE',
      build: [
        {
          chunk: 'index.mjs',
          format: 'umd',
          minify: false,
          name: globalName
        },
        {
          chunk: 'parse.mjs',
          format: 'umd',
          minify: false,
          name: `${globalName}.parse`
        },
        {
          chunk: 'Properties.mjs',
          format: 'umd',
          minify: false,
          name: `${globalName}.Properties`
        }
      ]
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
