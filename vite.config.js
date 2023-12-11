import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    // alias: {
    //   src: '/src',
    // },
  },
  server: {
    port: 3000, // specify your desired port here
  },
});
