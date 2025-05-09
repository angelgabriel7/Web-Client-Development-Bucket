// Mengkonversi suhu dari Fahrenheit ke Celsius
// @param {number} fahrenheit - Suhu dalam Fahrenheit
// @returns {string} - Suhu dalam Celsius dengan 2 angka desimal
function convertFahrenheitToCelsius(fahrenheit) {
  // Rumus: (°F - 32) × 5/9 = °C
  const celsius = (fahrenheit - 32) * 5/9;
  return celsius.toFixed(2);
}

// Contoh penggunaan
const tempInFahrenheit = 100; // 100°F
console.log(`${tempInFahrenheit}°F = ${convertFahrenheitToCelsius(tempInFahrenheit)}°C`);
// Output: 100°F = 37.78°C