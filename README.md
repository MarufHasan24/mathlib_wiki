# Mathlib

## Overview

Mathlib is a comprehensive library designed to provide essential mathematical functions and utilities for both JavaScript (JS) and C++. Whether you are working on web development projects or building high-performance applications, Mathlib aims to simplify mathematical operations and enhance your coding experience.

## Features

### Cross-Language Compatibility

Mathlib is available for both JavaScript and C++, making it versatile for a wide range of applications. Use the same set of mathematical functions seamlessly in your frontend and backend code.

### Core Mathematical Functions

Mathlib covers a variety of core mathematical functions, including:

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Trigonometric functions (sine, cosine, tangent)
- Exponential and logarithmic functions
- Statistical functions (mean, median, standard deviation)

### Vector and Matrix Operations

Simplify vector and matrix manipulations with Mathlib's convenient functions:

- Vector addition, subtraction, and scalar multiplication
- Matrix multiplication and inversion
- Determinant and eigenvalue calculations

### Random Number Generation

Generate random numbers with ease using Mathlib's built-in random number functions. It provides both uniform and normal distribution options for a wide range of applications.

## Getting Started

### nodejs

1. Install Mathlib using npm:

   ```bash
   npm install mathlib
   ```

2. Import Mathlib in your JavaScript code:

   ```javascript
   const mathlib = require('mathlib');
   ```

3. Start using Mathlib functions in your project:

   ```javascript
   const result = mathlib.add(5, 3);
   console.log(result); // Output: 8
   ```

### C++

1. Include Mathlib in your C++ project:

   ```cpp
   #include "mathlib.h"
   ```

2. Start using Mathlib functions in your C++ code:

   ```cpp
   #include <iostream>
   using namespace std;

   int main() {
       double result = mathlib::add(5, 3);
       cout << result << endl; // Output: 8
       return 0;
   }
   ```

## Documentation

For detailed information on all available functions and usage examples, refer to the [Mathlib Documentation](https://marufhasan24.github.io/mathlib_wiki/)
