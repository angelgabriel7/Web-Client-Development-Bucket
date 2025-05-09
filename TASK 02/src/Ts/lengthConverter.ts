// Mengkonversi panjang antara sentimeter dan kilometer
// @param value - Nilai panjang yang akan dikonversi
// @param unit - Unit asal ('cm' atau 'km')
// @returns Hasil konversi dengan unit baru
function convertLength(value: number, unit: string): string {
  if (unit.toLowerCase() === 'cm') {
    // Konversi cm ke km
    const inKm: number = value / 100000;
    return `${inKm} km`;
  } else if (unit.toLowerCase() === 'km') {
    // Konversi km ke cm
    const inCm: number = value * 100000;
    return `${inCm} cm`;
  } else {
    return "Unit tidak valid. Gunakan 'cm' atau 'km'.";
  }
}

// Contoh penggunaan
console.log(convertLength(10000, 'cm')); // Output: 0.1 km
console.log(convertLength(1, 'km'));     // Output: 100000 cm