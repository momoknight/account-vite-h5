import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleImport(
    {
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: (name) => {
            return `zarm/es/${name}/style/css`;
          },
        }
      ],
    }
  )],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 本地开发时
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:7001/',
  //       changeOrigin: true,
  //       // rewirte: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'config': path.resolve(__dirname, 'src/config')
    }
  }
})
