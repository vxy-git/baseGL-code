import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import {resolve} from 'path'

export default defineConfig({
    // 使用相对路径，避免静态服务器把绝对路径重写成 HTML 导致 MIME text/html
    base: '/',
    plugins: [
        vue(),
        ...(process.env.NODE_ENV === 'development' ? [VueDevTools()] : [])
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        manifest: true,
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
                manualChunks: {
                    'vue-vendor': ['vue', 'vue-router'],
                    animation: ['gsap', '@vueuse/motion']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    server: {
        port: 3002,
        open: false,
        proxy: {
            '/api': {
                target: 'https://admin.cloudcode.ink',
                changeOrigin: true,
                secure: true
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variables.scss" as *;`,
                api: 'modern-compiler'
            }
        }
    }
})
