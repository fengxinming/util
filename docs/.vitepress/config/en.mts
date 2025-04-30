import { defineConfig } from 'vitepress';

import { createNavItems, createSidebar } from './shared.mjs';

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  // eslint-disable-next-line max-len
  description: 'A lightweight, modular collection of utility libraries providing practical functions for common development scenarios, with TypeScript support.',
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide',
      //   activeMatch: '/guide/'
      // },
      {
        text: 'Modules',
        activeMatch: '/modules/',
        items: createNavItems('en/modules', '/modules')
      }
    ],

    sidebar: {
      ...createSidebar('en/modules', '/modules')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengxinming/util' }
    ]
  }
});
