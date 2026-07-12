import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/Qlara/' -> GitHub Pages em https://renandosreis52-cloud.github.io/Qlara/
// Se publicar no Vercel/domínio próprio, troque para base: '/'
export default defineConfig({
  base: '/Qlara/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
