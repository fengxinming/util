---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: util
  text: A lightweight, modular collection of utility libraries
  tagline: Providing practical functions for common development scenarios, with TypeScript support.
  actions:
    - theme: brand
      text: Guide
      link: /guide
    # - theme: alt
    #   text: API Examples
    #   link: /api/entry
  image:
    src: https://vitepress.dev/vitepress-logo-large.svg
    alt: create-vite-lib-starter

features:
  - title: TypeScript Support
    details: Full type definition files included
  - title: Browser Compatibility
    details: Supports ES5+ environments (via UMD builds)
  - title: Tree-shaking Ready
    details: Import individual functions via ES Modules for on-demand usage
---

## **Module List**

* [camel-kit](/zh/modules/camel-kit/) - **Camel Case Conversion Library**：Supports bidirectional transformation between **camelCase** and **snake_case**, lightweight and feature-rich.

* [date-manip](/zh/modules/date-manip/) - **Date Manipulation Library**：A lightweight library for date operations, offering modular, high-performance features including date addition, formatting, comparison, and more.

* [eemitt](/zh/modules/eemitt/) - **Event Emitter Library**：A lightweight event emitter library, offering a simple and flexible event emitter interface, with support for event listeners, once listeners, and event groups.

* [fast-qs](/zh/modules/fast-qs/) - **Fast Query String Parsing and Stringifying Library**：A lightweight library for parsing and stringifying URL query strings, offering high performance and customizable separators.

* [fast-replaceall](/zh/modules/fast-replaceall/) - **Fast String Replacement Library**：Supports global replacement, case-insensitive mode, start position control, and function-style replacement compatible with native `String.replace`.

* [is-what-type](/zh/modules/is-what-type/) - **Type Checking Library**：A simple utility library for detecting data types.

* [properties-like](/zh/modules/properties-like/) - **Java Properties Implementation**：A TypeScript implementation of the Java `.properties` specification, supporting configuration parsing, serialization, variable interpolation, and Unicode processing.

* [uri-escapify](/zh/modules/uri-escapify/) - **URI Escaping Library**：A lightweight library for URI encoding and decoding, offering `escape` and `unescape` functionality.

* [xhr-Promisify](/zh/modules/xhr-promisify/) - **Promise-based XHR Library**：Encapsulates traditional `XMLHttpRequest` into a Promise-based interface for simplified asynchronous request handling.
