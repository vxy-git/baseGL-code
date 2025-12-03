import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import {posix, resolve} from 'path'

const IMG_CDN = 'http://img.cloudcode.ink'
const VIDEO_CDN = 'http://video.cloudcode.ink'
const imgExt = /\.(png|jpe?g|gif|webp|avif|svg|ico)$/i
const videoExt = /\.(mp4|webm|mov|m4v)$/i
const tarExt = /\.tar$/i

// https://vite.dev/config/
export default defineConfig({
    // 让生成的静态资源走相对路径，避免 dist 放在子目录或刷新二级路由时资源 404
    base: './',
    plugins: [
        vue(),
        VueDevTools()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    // CDN配置（生产环境）
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: (assetInfo) => {
                    const ext = assetInfo.name ? posix.extname(assetInfo.name) : ''
                    if (ext === '.css') {
                        return 'css/[name][extname]'
                    }

                    const originalPath = assetInfo.originalFileName
                    if (originalPath) {
                        const normalized = posix.normalize(originalPath.replace(/\\/g, '/'))
                        const srcPrefix = 'src/assets/'

                        const srcIndex = normalized.indexOf(srcPrefix)
                        if (srcIndex !== -1) {
                            const relative = normalized.slice(srcIndex + srcPrefix.length)
                            return `assets/${relative}`
                        }
                    }

                    return 'assets/[name][extname]'
                },
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
    experimental: {
        renderBuiltUrl(filename, {type}) {
            if (type === 'asset') {
                if (videoExt.test(filename)) {
                    return `${VIDEO_CDN}/${filename}`
                }
                if (imgExt.test(filename) || tarExt.test(filename)) {
                    return `${IMG_CDN}/${filename}`
                }
            }

            return filename
        }
    },
    // 开发服务器配置
    server: {
        port: 3002,
        open: false
    },
    // CSS预处理器
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variables.scss" as *;`,
                api: 'modern-compiler'
            }
        }
    }
})
