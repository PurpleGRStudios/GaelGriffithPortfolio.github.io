import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE is set by the deploy workflow: "/" for a <user>.github.io repo,
// "/<repo-name>/" for a project repo.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
