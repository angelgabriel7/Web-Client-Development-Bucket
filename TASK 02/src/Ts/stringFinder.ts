// Mencari posisi kemunculan pertama dari string pencarian dalam string utama
// @param string - String utama
// @param searchString - String yang dicari
// @returns Indeks kemunculan pertama, atau -1 jika tidak ditemukan
function findFirstOccurrence(string: string, searchString: string): number {
  return string.indexOf(searchString);
}

// Contoh penggunaan
const text: string = "Hello world";
const search: string = "ell";
console.log(findFirstOccurrence(text, search)); // Output: 1