function getInitials(name: string): string {
  // Memisahkan nama berdasarkan spasi
  const nameParts: string[] = name.split(' ');
  
  // Mengambil huruf pertama dari setiap bagian nama dan mengubahnya menjadi uppercase
  let initials: string = '';
  for (const part of nameParts) {
    if (part.length > 0) {
      initials += part[0].toUpperCase();
    }
  }
  
  return initials;
}

// Contoh penggunaan
const fullName: string = 'John Doe';
console.log(getInitials(fullName)); // Output: JD