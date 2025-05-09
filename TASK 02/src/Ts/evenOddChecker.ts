// Memeriksa apakah suatu bilangan ganjil atau genap
// @param number - Bilangan yang akan diperiksa
// @returns true jika genap, false jika ganjil
function isEven(number: number): boolean {
  // Bilangan genap habis dibagi 2
  return number % 2 === 0;
}

// Contoh penggunaan
console.log(isEven(1000)); // Output: true (genap)
console.log(isEven(1001)); // Output: false (ganjil)