import { defineConfig } from 'vitepress';

import { createNavItems, createSidebar } from './shared.mjs';

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  description: 'A collection of custom plugins designed to enhance the functionality of the Vite build tool.',
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Guide',
        link: '/guide/introduction',
        activeMatch: '/guide/'
      },
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
      { icon: 'github', link: 'https://github.com/fengxinming/create-vite-lib-starter.git' }
    ]
  }
});
