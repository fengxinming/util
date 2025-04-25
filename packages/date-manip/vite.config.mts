import ts from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';
import pluginBuildChuck from 'vite-plugin-build-chunk';
import pluginCombine from 'vite-plugin-combine';
import pluginExternal from 'vite-plugin-external';
import pluginSeparateImporter from 'vite-plugin-separate-importer';

import { camelize } from '../camel-kit/src/camelize';
import { dependencies, name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginExternal({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(dependencies).concat(name)
    }),
    pluginCombine({
      src: ['src/*.ts', '!src/{chain,types}.ts'],
      target: 'src/index.ts',
      beforeWrite(code: string) {
        return `${code}export * from './types';`;
      }
    }),
    pluginSeparateImporter({
      libs: [{
        name: 'is-what-type',
        importFrom(importer, libName) {
          return {
            es: `${libName}/dist/${importer}.mjs`,
            cjs: `${libName}/dist/${importer}`,
            name: `{ ${importer} }`
          };
        }
      }]
    }),
    ts({
      tsconfig: './tsconfig.build.json'
    }),
    pluginBuildChuck({
      build: [{
        chunk: 'index.mjs',
        format: 'umd',
        minify: false,
        name: camelize(name, { pascalCase: true })
      }, {
        chunk: 'chain.mjs',
        format: 'umd',
        minify: false,
        name: camelize(name, { pascalCase: true })
      }]
    })
  ],
  build: {
    lib: {
      entry: ['src/chain.ts'],
      formats: ['es', 'cjs'],
      fileName: '[name]'
    },
    minify: false
  }
});
