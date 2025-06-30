import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "styles/variables.scss" as variables;
          @use "styles/color-classes.scss" as colors;
          @use "styles/global.scss" as *;
        `,
      },
    },
  },
});
