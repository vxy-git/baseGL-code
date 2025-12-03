import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import {resolve} from 'path'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 将 @/assets/* 映射到 public/static 下的静态资源，避免被打包哈希
function staticPublicAssetsPlugin() {
    const VIRTUAL_PREFIX = '\0static-public:'
    const ASSETS_PREFIX = '@/assets/'
    const SRC_ASSETS_DIR = path.resolve(__dirname, 'src/assets')

    const toPosix = (p) => p.split(path.sep).join('/')
    const stripQuery = (id = '') => id.split('?')[0]
    const exportCode = (rel) => `export default import.meta.env.BASE_URL + ${JSON.stringify(`static/${rel}`)};`

    const relativeFromAssets = (absPath) => toPosix(path.relative(SRC_ASSETS_DIR, absPath))

    return {
        name: 'static-public-assets',
        enforce: 'pre',
        resolveId(source, importer) {
            const cleanSource = stripQuery(source)

            // 直接处理虚拟前缀（带/不带 ?import）
            if (cleanSource.startsWith(VIRTUAL_PREFIX)) {
                return cleanSource
            }

            // 直接匹配 @/assets/ 开头
            if (cleanSource.startsWith(ASSETS_PREFIX)) {
                const rel = cleanSource.slice(ASSETS_PREFIX.length)
                return `${VIRTUAL_PREFIX}${rel}`
            }

            // 兼容经过 alias 后的 /src/assets/ 或绝对路径
            if (cleanSource.startsWith('/src/assets/')) {
                const rel = cleanSource.slice('/src/assets/'.length)
                return `${VIRTUAL_PREFIX}${rel}`
            }

            // 兼容相对路径导入（不常见，但防御性处理）
            if (importer && (cleanSource.startsWith('.') || cleanSource.startsWith('/'))) {
                const importerPath = stripQuery(importer)
                const resolved = path.resolve(path.dirname(importerPath), cleanSource)
                if (resolved.startsWith(SRC_ASSETS_DIR)) {
                    return `${VIRTUAL_PREFIX}${relativeFromAssets(resolved)}`
                }
            }

            return null
        },
        load(id) {
            const cleanId = stripQuery(id)

            if (cleanId.startsWith(VIRTUAL_PREFIX)) {
                const rel = cleanId.slice(VIRTUAL_PREFIX.length)
                return exportCode(rel)
            }

            // 兜底：如果还有直接解析到 src/assets 的绝对路径
            if (cleanId.startsWith(SRC_ASSETS_DIR)) {
                const rel = relativeFromAssets(cleanId)
                return exportCode(rel)
            }

            return null
        }
    }
}

// https://vite.dev/config/
export default defineConfig({
    // 让生成的静态资源走相对路径，避免 dist 放在子目录或刷新二级路由时资源 404
    base: './',
    plugins: [
        staticPublicAssetsPlugin(),
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
            // output: {
            //     assetFileNames: (chunkInfo) => {
            //         // 用后缀名称进行区别处理
            //         // 处理其他资源文件名 e.g. css png 等
            //         if (
            //             chunkInfo.name?.endsWith('.webm') ||
            //             chunkInfo.name?.endsWith('.png') ||
            //             chunkInfo.name?.endsWith('.jpg') ||
            //             chunkInfo.name?.endsWith('.gif')
            //         ) {
            //             return `assets/images/[name].[ext]`;
            //         }

            //         return `assets/[name].[hash].[ext]`;
            //     },
            // },
        },
    },
    experimental: {
        // renderBuiltUrl(filename) {
        //     if (
        //         filename.endsWith('.webm') ||
        //         filename.endsWith('.png') ||
        //         filename.endsWith('.jpg') ||
        //         filename.endsWith('.gif')
        //     ) {
        //         const name = filename.replace('assets/images/', '');
        //         return `https://cdnURL/images/${name}`;
        //     }

        //     return filename;
        // },
        rollupOptions: {
            output: {
                manualChunks: {
                    'vue-vendor': ['vue', 'vue-router'],
                    'animation': ['gsap', '@vueuse/motion']
                }
            }
        },
        // 性能优化
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
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
