function calculateThirdAngle(a, b) {
  // Total sudut dalam segitiga adalah 180 derajat
  return 180 - a - b;
}

// Contoh penggunaan
const angleA = 80;
const angleB = 65;
console.log(calculateThirdAngle(angleA, angleB)); // Output: 35
