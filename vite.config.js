import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Karunarahul_Portfolio/', // GitHub Pages base path
  plugins: [react()],
})
