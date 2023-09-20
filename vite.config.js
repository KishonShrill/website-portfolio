import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/website-portfolio/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        mas_amicus: resolve(__dirname, './mas_amicus/index.html'),
        minimalistic: resolve(__dirname, './minimalistic/index.html'),
      },
    }
  }  
})