function getInitials(name) {
  // Memisahkan nama berdasarkan spasi
  const nameParts = name.split(' ');
  
  // Mengambil huruf pertama dari setiap bagian nama dan mengubahnya menjadi uppercase
  let initials = '';
  for (const part of nameParts) {
    if (part.length > 0) {
      initials += part[0].toUpperCase();
    }
  }
  
  return initials;
}

// Contoh penggunaan
const fullName = 'John Doe';
console.log(getInitials(fullName)); // Output: JD
