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
        
        news_homepage_main: resolve(__dirname, './projects/news_homepage/index.html'),
        nft_preview_card_component: resolve(__dirname, './projects/nft_preview_card_component/index.html'),
        product_preview_card_component: resolve(__dirname, './projects/product_preview_card_component/index.html'),
        qr_code_component: resolve(__dirname, './projects/qr_code_component/index.html'),
        results_summary_component: resolve(__dirname, './projects/results_summary_component/index.html'),
        newsletter_sign_up_with_success_message: resolve(__dirname, './projects/newsletter_sign_up_with_success_message/index.html'),
        success: resolve(__dirname, './projects/newsletter_sign_up_with_success_message/success/index.html'),
        age_calculator_app: resolve(__dirname, './projects/age_calculator_app/index.html'),
      },
    }
  }  
})