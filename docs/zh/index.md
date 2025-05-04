---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: util
  text: 一个轻量级、模块化的工具库集合
  tagline: 提供常见开发场景的实用函数，支持 TypeScript。
  # actions:
  #   - theme: brand
  #     text: 指引
  #     link: /guide
    # - theme: alt
    #   text: API 示例
    #   link: /api/entry
  image:
    src: https://vitepress.dev/vitepress-logo-large.svg
    alt: util

features:
  - title: TypeScript 支持
    details: 包含完整的类型定义文件
  - title: 浏览器兼容性
    details: 支持 ES5+ 环境（通过 UMD 构建）
  - title: 支持按需加载
    details: 通过 ES 模块按需导入单个函数
---

## 模块列表

* [camel-kit](/zh/modules/camel-kit/) - **驼峰转换工具库**：支持 **驼峰命名（camelCase）** 与 **下划线命名（snake_case）** 的双向转换，功能丰富且轻量级。

* [date-manip](/zh/modules/date-manip/) - **日期操作工具库**：一个轻量级的日期工具库，旨在提供模块化、高性能和额外功能。它支持多种日期操作，包括日期的增减、格式化、比较等。

* [eemitt](/zh/modules/eemitt/) - **轻量级事件总线**：轻量级、TypeScript 原生的事件发射器库，支持模块化事件监听、一次触发、传播控制等核心功能。

* [fast-qs](/zh/modules/fast-qs/) - **快速、安全的 URL 查询字符串解析和格式化工具库**：一个快速、安全的 URL 查询字符串解析和格式化工具库，支持自定义分隔符、空值处理、重复键处理等高级功能。

* [fast-replaceall](/zh/modules/fast-replaceall/) - **高性能字符串替换工具**：支持全局替换、大小写不敏感模式、起始位置控制，以及与原生 `String.replace` 兼容的函数式替换。

* [geometry-fns](/zh/modules/geometry-fns/) - **几何算法工具库**：一个轻量级、高性能的几何算法工具库，提供了一系列用于计算几何形状、判断相交、计算距离、计算重心等常用功能的函数。

* [is-what-type](/zh/modules/is-what-type/) - **类型检测工具库**：一个简单易用的类型检查工具库。

* [properties-like](/zh/modules/properties-like/) - **Java Properties 实现库**：基于 TypeScript 实现 Java [`.properties` 规范](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Properties.html#load(java.io.Reader))，支持配置文件解析、序列化、变量插值及 Unicode 处理等高级功能。

* [uri-escapify](/zh/modules/uri-escapify/) - **URI 编码工具库**：一个轻量级的URI转义工具库，提供 `escape` 和 `unescape` 功能。

* [xhr-Promisify](/zh/modules/xhr-promisify/) - **轻量级 Promise 化 XHR 库**：将传统的 `XMLHttpRequest` 封装为基于 Promise 的接口，简化异步请求开发。
