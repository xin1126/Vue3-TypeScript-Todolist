import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

export default defineConfig({
  plugins: [vue(),
    ViteComponents({
      dirs: ['src/components', 'src/views'],
    }),
  ],
});
