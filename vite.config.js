import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { robots } from 'vite-plugin-robots'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    robots({
      /* pass your config */
    })
  ]
})
