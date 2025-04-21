import ts from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';
import pluginBuildChunk from 'vite-plugin-build-chunk';
import pluginCombine from 'vite-plugin-combine';
import pluginExternal from 'vite-plugin-external';
import pluginSeparateImporter from 'vite-plugin-separate-importer';

import { camelize } from '../camel-kit/src/camelize';
import { dependencies, name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginCombine({
      src: './src/*.ts',
      target: './src/index.ts',
      exports: 'all'
    }),
    ts({
      tsconfig: './tsconfig.build.json'
    }),
    pluginExternal({
      externalizeDeps: Object.keys(dependencies)
    }),
    pluginSeparateImporter({
      libs: [{
        name: 'fast-qs',
        importFrom(importer, libName) {
          return {
            es: `${libName}/dist/${importer}.mjs`,
            cjs: `${libName}/dist/${importer}`
          };
        }
      }]
    }),
    pluginBuildChunk({
      logLevel: 'TRACE',
      build: {
        chunk: 'index.mjs',
        name: camelize(name, { pascalCase: true }),
        format: 'umd',
        minify: false
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
    environment: 'jsdom'
  }
});
