# JavaScript and TypeScript Functions

This repository contains implementations of 5 basic functions using JavaScript and TypeScript developed for the Web Client Development course.

[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://bit.ly/4k4DSky) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## List of Functions

### 1. Fahrenheit to Celsius Temperature Conversion
- **Input**: Temperature in Fahrenheit (example: 100)
- **Output**: Temperature in Celsius (example: 37.78)
- **File**: `js/temperatureConverter.js` and `ts/temperatureConverter.ts`

### 2. Length Conversion (cm to km or vice versa)
- **Input**: Value and unit (example: 10000, "cm")
- **Output**: Conversion result (example: "0.1 km")
- **File**: `js/lengthConverter.js` and `ts/lengthConverter.ts`

### 3. Even or Odd Number Check
- **Input**: A number (example: 1000)
- **Output**: Boolean (true if even, false if odd)
- **File**: `js/evenOddChecker.js` and `ts/evenOddChecker.ts`

### 4. String Search
- **Input**: String and search pattern (example: "Hello world", "ell")
- **Output**: First occurrence index (example: 1)
- **File**: `js/stringFinder.js` and `ts/stringFinder.ts`

### 5. Palindrome Check
- **Input**: A string (example: "madam")
- **Output**: Boolean (true if palindrome, false if not)
- **File**: `js/palindromeChecker.js` and `ts/palindromeChecker.ts`

## How to Use

### JavaScript
```javascript
// Example of using the temperature conversion function
const tempInFahrenheit = 100; // 100°F
console.log(`${tempInFahrenheit}°F = ${convertFahrenheitToCelsius(tempInFahrenheit)}°C`); // Output: 100°F = 37.78°C
```

### TypeScript
```typescript
// Example of using the temperature conversion function
const tempInFahrenheit: number = 100; // 100°F
console.log(`${tempInFahrenheit}°F = ${convertFahrenheitToCelsius(tempInFahrenheit)}°C`); // Output: 100°F = 37.78°C
```