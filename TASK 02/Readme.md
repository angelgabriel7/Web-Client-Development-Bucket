# JavaScript dan TypeScript Functions

Repository ini berisi implementasi 5 fungsi dasar menggunakan JavaScript dan TypeScript yang dikembangkan untuk tugas mata kuliah Web Client Development.

[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://bit.ly/4k4DSky)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Daftar Fungsi

### 1. Konversi Suhu Fahrenheit ke Celsius
- **Input**: Suhu dalam Fahrenheit (contoh: 100)
- **Output**: Suhu dalam Celsius (contoh: 37.78)
- **File**: `js/temperatureConverter.js` dan `ts/temperatureConverter.ts`

### 2. Konversi Panjang (cm ke km atau sebaliknya)
- **Input**: Nilai dan unit (contoh: 10000, "cm")
- **Output**: Hasil konversi (contoh: "0.1 km")
- **File**: `js/lengthConverter.js` dan `ts/lengthConverter.ts`

### 3. Cek Bilangan Ganjil atau Genap
- **Input**: Sebuah bilangan (contoh: 1000)
- **Output**: Boolean (true jika genap, false jika ganjil)
- **File**: `js/evenOddChecker.js` dan `ts/evenOddChecker.ts`

### 4. Pencarian String
- **Input**: String dan pattern pencarian (contoh: "Hello world", "ell")
- **Output**: Indeks kemunculan pertama (contoh: 1)
- **File**: `js/stringFinder.js` dan `ts/stringFinder.ts`

### 5. Cek Palindrom
- **Input**: Sebuah string (contoh: "madam")
- **Output**: Boolean (true jika palindrom, false jika bukan)
- **File**: `js/palindromeChecker.js` dan `ts/palindromeChecker.ts`

## Cara Penggunaan

### JavaScript
```javascript
// Contoh penggunaan fungsi konversi suhu
const tempInFahrenheit = 100; // 100°F
console.log(`${tempInFahrenheit}°F = ${convertFahrenheitToCelsius(tempInFahrenheit)}°C`);
// Output: 100°F = 37.78°C

typescript
// Contoh penggunaan fungsi konversi suhu
const tempInFahrenheit: number = 100; // 100°F
console.log(`${tempInFahrenheit}°F = ${convertFahrenheitToCelsius(tempInFahrenheit)}°C`);
// Output: 100°F = 37.78°C