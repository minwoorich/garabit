import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitepress'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'

const currentDir = dirname(fileURLToPath(import.meta.url))

const composablesDir  = resolve(currentDir, 'theme', 'components')
const utilsDir = resolve(currentDir, 'theme', 'utils')

export default defineConfig({
    srcDir: 'src',
    markdown: {
        config(md) {
            md.use(MarkdownItGitHubAlerts)
        },
        gfmAlerts: true,
        theme: 'everforest-light',
    },
    vite: {
        plugins: [
            {
                name: 'watcher',
                configureServer(server) {
                    server.watcher.add([composablesDir, utilsDir])
                },
            },
            AutoImport({
                imports: ['vue', 'vitepress'],
                dirs: [composablesDir, utilsDir],
                dts: resolve(currentDir, 'auto-imports.d.ts'),
            }),
            // ...
        ],
    },
})