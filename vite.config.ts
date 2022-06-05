import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { viteVConsole } from 'vite-plugin-vconsole'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 执行icon name的格式
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      dirs: ['src/components/base'],
      resolvers: [
        VantResolver()
      ]
    }),
    viteVConsole({
      entry: path.resolve('src/main.ts'),
      localEnabled: true,
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme: 'dark'
      }
    }),
    styleImport({
      resolves: [VantResolve()]
    }),
    vueJsx({
      // 配置选项
    }),
    eslintPlugin({
      // 'vue/multi-word-component-names': 0,
      // 'vue/valid-template-root': 0,
      // 'vue/html-self-closing': 0,
      // catch: false // 禁用eslint缓存
    }),
    AutoImport({
      imports: ['vue', 'vue-router'] // 自动导入vue和vue-router相关函数，但是现在eslint校验不过 https://blog.csdn.net/qq_35317490/article/details/123524730
      // eslintrc: {
      //   enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
      //   filepath: './.eslintrc-auto-import.json', // 生成json文件
      //   globalsPropValue: true
      // }
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
