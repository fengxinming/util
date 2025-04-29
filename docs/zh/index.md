---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: util
  text: 一个轻量级、模块化的工具库集合
  tagline: 提供常见开发场景的实用函数，支持 TypeScript。
  actions:
    - theme: brand
      text: 指引
      link: /guide
    # - theme: alt
    #   text: API 示例
    #   link: /api/entry
  image:
    src: https://vitepress.dev/vitepress-logo-large.svg
    alt: create-vite-lib-starter

features:
  - title: TypeScript 支持
    details: 包含完整的类型定义文件
  - title: 浏览器兼容性
    details: 支持 ES5+ 环境（通过 UMD 构建）
  - title: 支持按需加载
    details: 通过 ES 模块按需导入单个函数
---