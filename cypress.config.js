/* eslint-disable no-undef */
import { defineConfig } from 'cypress';
import coverageTask from '@cypress/code-coverage/task.js';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      coverageTask(on, config);
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      coverageTask(on, config);
      return config;
    },
  },
});
