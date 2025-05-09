// Mencari posisi kemunculan pertama dari string pencarian dalam string utama
// @param {string} string - String utama
// @param {string} searchString - String yang dicari
// @returns {number} - Indeks kemunculan pertama, atau -1 jika tidak ditemukan
function findFirstOccurrence(string, searchString) {
  return string.indexOf(searchString);
}

// Contoh penggunaan
const text = "Hello world";
const search = "ell";
console.log(findFirstOccurrence(text, search)); // Output: 1