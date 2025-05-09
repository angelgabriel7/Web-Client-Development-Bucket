function calculateThirdAngle(a: number, b: number): number {
  // Total sudut dalam segitiga adalah 180 derajat
  return 180 - a - b;
}

// Contoh penggunaan
const angleA: number = 80;
const angleB: number = 65;
console.log(calculateThirdAngle(angleA, angleB)); // Output: 35