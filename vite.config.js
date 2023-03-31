import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    'alias': {
      '@': resolve(__dirname, 'src'), // 别名
      views: resolve(__dirname, 'src/views'),
    }
  },
  build: {
    target: 'es2020' // 使用newIMG 需要配置 支持es2020
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
})
