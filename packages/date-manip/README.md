# date-manip

[![npm package](https://nodei.co/npm/date-manip.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/date-manip)

[![NPM Version](https://img.shields.io/npm/v/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![NPM Downloads](https://img.shields.io/npm/dm/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/date-manip/badge)](https://www.jsdelivr.com/package/npm/date-manip)

---

## Introduction

`date-manip` is a lightweight and modular JavaScript library for handling date operations with high performance. It provides a rich set of features, including date arithmetic (addition/subtraction), formatting, comparison, and more.

Whether you're building a small utility or a large-scale application, `date-manip` simplifies complex date manipulations while maintaining efficiency and flexibility.

## Features

- **Modularity**: Supports modular import and on-demand loading.
- **High Performance**: Optimized performance for various scenarios.
- **Chaining**: Supports chaining, making the code more concise.
- **Rich Features**: Supports date addition and subtraction, formatting, comparison, and other operations.

## Documentation

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/util/modules/date-manip/)

## Quick Start

### Installation

Install `date-manip` via npm:

```bash
npm install date-manip
```

### Basic Usage

Here’s a quick example to get you started:

```javascript
import { addDays, format } from 'date-manip';

// Add 5 days to the current date
const newDate = addDays(new Date(), 5);

// Format the date as "YYYY-MM-DD"
console.log(format(newDate, 'YYYY-MM-DD'));
```

## Contributing

We welcome contributions from the community! If you find a bug or want to suggest an improvement, feel free to open an issue or submit a pull request.

### How to Contribute
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).
