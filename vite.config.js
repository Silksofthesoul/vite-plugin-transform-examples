import { resolve, join } from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgLoader from 'vite-svg-loader'
import XMLLoader from 'vite-plugin-xml-loader'
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import transformPlugin from 'vite-plugin-transform';

require('dotenv').config({ path: resolve(process.cwd(), '.env.app')});

// https://vitejs.dev/config/

export const ic = (c, a, b) => c ? a : b;
export const nodeEnv = process.env.NODE_ENV;
export const isProd = nodeEnv === 'production';
export const isDev = nodeEnv === 'development';

const logEnv = _ => {
  console.log('start:\n');
  console.log('NODE_ENV:', nodeEnv);
  console.log('isProd:', isProd);
  console.log('isDev:', isDev);
};

logEnv();

const alias = {
  '@': resolve(__dirname, './src'),
  '@npm': resolve(__dirname, 'node_modules'),
  '@root': resolve(__dirname, './'),
  '@stl': resolve(__dirname, './src/assets/styles'),
  '@img': resolve(__dirname, './src/assets/images')
};

const replace = {
  'rrr': 'Hello Friends!',
  'replaceme': 'abc123'
};

const exclude = ['node_modules' ];
const replaceFiles = [
  resolve(join(__dirname, './dist/data.xml')),
  resolve(join(__dirname, './dist/data-notimported.xml')),
];

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      XMLLoader(),
      svgLoader({ svgoConfig: { multipass: true } }),
      legacy(),
      transformPlugin({ 
        tStart: '{%', tEnd:   '%}',
        replace,
        exclude,
        replaceFiles
      }),
    ],
    resolve: { alias },
    css: {
      modules: {
        generateScopedName: ic(isDev, '[local]:[hash:base64:5]', '[hash:base64:5]'),
        localsConvention: 'camelCaseOnly'
      },
      preprocessorOptions: {
        less: { javascriptEnabled: true }
      },
    },

    build: {
      sourcemap: ic(isDev, true, false),
      manifest: true,
      polyfillDynamicImport: true,
      rollupOptions: {
        input: resolve(__dirname, './src/main.js'),
      }
    }
  });
};
