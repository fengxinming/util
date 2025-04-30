import { defineConfig } from 'vitepress';

import { createNavItems, createSidebar } from './shared.mjs';

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  description: '一个轻量级、模块化的工具库集合，提供常见开发场景的实用函数，支持 TypeScript。',
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // {
      //   text: '指引',
      //   link: '/zh/guide',
      //   activeMatch: '/zh/guide/'
      // },
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
      { icon: 'github', link: 'https://github.com/fengxinming/util' }
    ]
  }
});
