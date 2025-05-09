// Memeriksa apakah suatu string adalah palindrom
// Palindrom adalah string yang terbaca sama dari depan maupun belakang
// @param string - String yang akan diperiksa
// @returns true jika palindrom, false jika bukan
function isPalindrome(string: string): boolean {
  // Menghilangkan spasi dan mengubah ke lowercase
  const cleanString: string = string.toLowerCase().replace(/\s/g, '');
  
  // Membalik string dan membandingkan
  const reversedString: string = cleanString.split('').reverse().join('');
  return cleanString === reversedString;
}

// Contoh penggunaan
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false