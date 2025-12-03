import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import {posix, resolve, join} from 'path'
import {readdirSync, readFileSync, writeFileSync} from 'fs'

const IMG_CDN = 'http://img.cloudcode.ink'
const VIDEO_CDN = 'http://video.cloudcode.ink'
const imgExt = /\.(png|jpe?g|gif|webp|avif|svg|ico)$/i
const videoExt = /\.(mp4|webm|mov|m4v)$/i
const tarExt = /\.tar$/i

// https://vite.dev/config/
export default defineConfig({
    // 绝对路径输出，避免部署在 /js 下时出现 /js/js/ 重复
    base: '/',
    plugins: [
        vue(),
        VueDevTools(),
        {
            name: 'html-absolute-paths',
            enforce: 'post',
            transformIndexHtml(html) {
                return html
                    .replace(/(src|href)=\"js\//g, '$1="/js/')
                    .replace(/(src|href)=\"css\//g, '$1="/css/')
            }
        },
        {
            name: 'fix-chunk-deps-path',
            enforce: 'post',
            apply: 'build',
            renderChunk(code) {
                const next = code
                    .replace(/"js\//g, '"./')
                    .replace(/"css\//g, '"../css/')
                if (next !== code) {
                    return {code: next, map: null}
                }
                return null
            }
        },
        {
            name: 'postprocess-chunk-paths',
            apply: 'build',
            closeBundle() {
                const dir = join(__dirname, 'dist', 'js')
                try {
                    for (const file of readdirSync(dir)) {
                        if (!file.endsWith('.js')) continue
                        const p = join(dir, file)
                        const code = readFileSync(p, 'utf8')
                        const next = code
                            .replace(/"js\//g, '"./')
                            .replace(/"css\//g, '"../css/')
                        if (next !== code) {
                            writeFileSync(p, next, 'utf8')
                        }
                    }
                } catch (err) {
                    this.warn(`postprocess-chunk-paths skipped: ${err.message}`)
                }
            }
        }
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
            },
            plugins: [
                {
                    name: 'fix-chunk-deps-path-rollup',
                    enforce: 'post',
                    apply: 'build',
                    renderChunk(code) {
                        const next = code
                            .replace(/"js\//g, '"./')
                            .replace(/"css\//g, '"../css/')
                        if (next !== code) {
                            return {code: next, map: null}
                        }
                        return null
                    }
                }
            ]
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
