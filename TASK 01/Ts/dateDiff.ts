function calculateDaysDifference(date1: string, date2: string): number {
  const firstDate: Date = new Date(date1);
  const secondDate: Date = new Date(date2);
  
  // Menghitung selisih dalam milidetik dan mengkonversi ke hari
  const diffTime: number = Math.abs(secondDate.getTime() - firstDate.getTime());
  const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

// Contoh penggunaan
const date1: string = '2024-03-19';
const date2: string = '2024-03-21';
console.log(calculateDaysDifference(date1, date2)); // Output: 2