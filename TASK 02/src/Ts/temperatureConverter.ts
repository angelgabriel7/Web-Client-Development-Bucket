// Mengkonversi suhu dari Fahrenheit ke Celsius
// @param fahrenheit - Suhu dalam Fahrenheit
// @returns Suhu dalam Celsius dengan 2 angka desimal
function convertFahrenheitToCelsius(fahrenheit: number): string {
  // Rumus: (°F - 32) × 5/9 = °C
  const celsius: number = (fahrenheit - 32) * 5/9;
  return celsius.toFixed(2);
}

// Contoh penggunaan
const tempInFahrenheit: number = 100; // 100°F
console.log(`${tempInFahrenheit}°F = ${convertFahrenheitToCelsius(tempInFahrenheit)}°C`);
// Output: 100°F = 37.78°C