function calculateDaysDifference(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  
  // Menghitung selisih dalam milidetik dan mengkonversi ke hari
  const diffTime = Math.abs(secondDate - firstDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

// Contoh penggunaan
const date1 = '2024-03-19';
const date2 = '2024-03-21';
console.log(calculateDaysDifference(date1, date2)); // Output: 2
