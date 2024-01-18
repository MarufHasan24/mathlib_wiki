# Mathlib

## Overview

Mathlib is a versatile and efficient mathematical library designed for use in both Node.js and C++. It provides a comprehensive set of mathematical functions and utilities to simplify complex calculations and enhance the mathematical capabilities of your applications.

## Features

- **Cross-Language Compatibility:** Mathlib is seamlessly integrated into both Node.js and C++, allowing you to use the same set of functions across different environments.

- **Extensive Functionality:** The library covers a wide range of mathematical operations, including basic arithmetic, trigonometry, linear algebra, statistics, and more.

- **Performance Optimization:** Mathlib is optimized for performance, utilizing efficient algorithms and data structures to ensure fast and reliable mathematical computations.

- **Easy Integration:** With a simple and intuitive API, Mathlib is easy to integrate into your projects. Whether you are working on a web application in Node.js or a native C++ application, Mathlib provides a consistent interface.

## Getting Started

### Node.js

To use Mathlib in your Node.js project, follow these steps:

1. Install Mathlib using npm:

   ```bash
   npm install mathlib
   ```

2. Require Mathlib in your JavaScript file:

   ```javascript
   const mathlib = require('mathlib');
   ```

3. Start using Mathlib functions in your code:

   ```javascript
   const result = mathlib.add(2, 3);
   console.log(result); // Output: 5
   ```

### C++

To integrate Mathlib into your C++ project, follow these steps:

1. Clone the Mathlib repository:

   ```bash
   git clone https://github.com/MarufHasan24/mathlib-cpp.git
   ```

2. Build the Mathlib library:

   ```bash
   cd mathlib
   mkdir build
   cd build
   cmake ..
   make
   ```

3. Link Mathlib with your C++ application by adding the following to your CMakeLists.txt:

   ```cmake
   target_link_libraries(your_project_name PRIVATE mathlib)
   ```

4. Include Mathlib headers in your C++ source code:

   ```cpp
   #include "./PATH-TO-MATHLIB/mathlib.h"
   ```

5. Start using Mathlib functions in your code:

   ```cpp
   int result = mlb::add(2, 3);
   std::cout << result << std::endl; // Output: 5
   ```

## Documentation

For detailed information on Mathlib functions and usage, refer to the [documentation](https://marufhasan24.github.io/mathlib_wiki/index.html)

## Contributions

Contributions to Mathlib are welcome! If you find a bug, have a feature request, or would like to contribute to the library, please check our [contribution guidelines](CONTRIBUTING.md).

## License

Mathlib is distributed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the library in your projects.

## Contact

If you have any questions or issues, please feel free to reach out to us at [gamerid703@gmail.com](mailto:gamerid703@gmail.com).

Happy coding with Mathlib!
