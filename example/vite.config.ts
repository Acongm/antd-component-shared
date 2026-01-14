import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@acongmr/antd-components-shared': path.resolve(
        __dirname,
        '../packages/components/src'
      ),
    },
  },
  server: {
    port: 3000,
  },
});
