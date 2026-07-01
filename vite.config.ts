import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function figmaDependencyResolver() {
  return {
    name: 'figma-dependency-resolver',
    resolveId(source) {
      if (source.includes('@')) {
        if (source.startsWith('@')) {
          const parts = source.split('@');
          if (parts.length === 3) {
            return this.resolve('@' + parts[1]);
          }
        } else {
          const parts = source.split('@');
          if (parts.length === 2 && !parts[0].includes('/') && !parts[0].includes('\\')) {
            return this.resolve(parts[0]);
          }
        }
      }
      return null;
    }
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    figmaDependencyResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
