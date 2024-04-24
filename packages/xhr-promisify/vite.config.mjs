import typescript from '@rollup/plugin-typescript';
import camelCase from 'camelcase';
import { build, defineConfig } from 'vite';
import external from 'vite-plugin-external';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: '[name]'
    }
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json'
    }),
    external({
      externalizeDeps: Object.keys(pkg.dependencies)
    }),
    {
      name: 'umd',
      async closeBundle() {
        await build({
          configFile: false,
          build: {
            emptyOutDir: false,
            minify: 'terser',
            lib: {
              entry: 'dist/index.mjs',
              name: camelCase(pkg.name),
              formats: ['umd'],
              fileName: '[name]'
            }
          }
        });
      }
    }
  ]
});
