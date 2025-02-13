import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate' ,
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'JMR',
        short_name: 'JMR',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'public/vite.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
          {
            src: 'public/vite.svg',
            sizes: '512x512',
            type: 'image/svg',
          }
        ]
      }
    })
  ],
})
