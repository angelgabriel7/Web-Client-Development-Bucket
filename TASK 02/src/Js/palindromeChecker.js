// Memeriksa apakah suatu string adalah palindrom
// Palindrom adalah string yang terbaca sama dari depan maupun belakang
// @param {string} string - String yang akan diperiksa
// @returns {boolean} - true jika palindrom, false jika bukan
function isPalindrome(string) {
  // Menghilangkan spasi dan mengubah ke lowercase
  const cleanString = string.toLowerCase().replace(/\s/g, '');
  
  // Membalik string dan membandingkan
  const reversedString = cleanString.split('').reverse().join('');
  return cleanString === reversedString;
}

// Contoh penggunaan
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false