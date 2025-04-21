import { defineConfig } from 'vitepress';

import { createNavItems, createSidebar } from './shared.mjs';

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  description: '一个包含多个自定义插件的集合，用于增强 Vite 构建工具的功能。',
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '指南',
        link: '/zh/guide/introduction',
        activeMatch: '/zh/guide/'
      },
      {
        text: '模块列表',
        activeMatch: '/zh/modules/',
        items: createNavItems('zh/modules', '/zh/modules')
      }
    ],

    sidebar: {
      ...createSidebar('zh/modules', '/zh/modules')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengxinming/create-vite-lib-starter.git' }
    ]
  }
});
