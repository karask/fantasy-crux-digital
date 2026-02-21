import { defineConfig } from 'vite'
export default defineConfig({
  // This ensures assets are loaded via relative paths, 
  // which works perfectly for domains and GitHub Pages.
  base: './', 
})
