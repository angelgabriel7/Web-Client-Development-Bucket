# README.md

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Medium](https://img.shields.io/badge/Medium-000000?style=flat-square&logo=medium&logoColor=white)](https://bit.ly/3Stx0RP)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

## 📝 Overview
Proyek ini mengimplementasikan aplikasi Pokédex menggunakan React Hooks. Aplikasi ini memungkinkan pengguna untuk menjelajahi daftar Pokémon, mencari Pokémon tertentu, menandai Pokémon favorit, dan melihat detail setiap Pokémon.

## ✨ React Hooks yang Digunakan
- ✅ **useState**: Mengelola state komponen
- ✅ **useEffect**: Mengatur side effects seperti fetching data
- ✅ **useContext**: Menyediakan dan mengakses state global
- ✅ **useReducer**: Mengelola state yang kompleks
- ✅ **useCallback**: Memoizing fungsi
- ✅ **useMemo**: Memoizing nilai yang dikalkulasi
- ✅ **useRef**: Mereferensi elemen DOM atau nilai dalam komponen
- ✅ **Custom Hooks**: Mengimplementasikan logic yang dapat digunakan kembali

## 🚀 Fitur
- Daftar Pokémon dengan paginasi
- Pencarian Pokémon
- Tampilan detail Pokémon
- Toggle mode tampilan (grid/list)
- Sistem favorit (menggunakan localStorage)
- Responsive design for mobile and desktop
- Animasi saat berganti halaman

## 💻 Cara Menjalankan
1. Clone repository
```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

2. Install dependencies
```bash
npm install
```

3. Jalankan server development
```bash
npm run dev
```

4. Build untuk production
```bash
npm run build
```

## 🧠 Implementasi Hooks

### useState
Mengatur state lokal seperti tampilan list/grid, state pengurutan, dan state filter.

### useEffect
Mengatur fetching data, memfilter Pokémon berdasarkan pencarian, dan menyimpan data ke localStorage.

### useContext dan useReducer
Mengatur state global aplikasi termasuk daftar Pokémon, favorit, dan filter.

### useCallback
Mengoptimalkan fungsi handler seperti toggleFavorite dan fetchData.

### useMemo
Mengoptimalkan kalkulasi seperti pengurutan dan pemfilteran Pokémon.

### Custom Hooks
- **usePokemonData**: Mengambil dan mengelola data Pokémon
- **usePokemonDetail**: Mengambil data detail untuk satu Pokémon
- **useDebounce**: Menunda pencarian untuk mencegah API requests yang berlebihan
- **useLocalStorage**: Menyimpan dan mengambil data dari localStorage

## 📂 Struktur Proyek
```
src/
├── assets/            # Gambar, ikon, dan aset lainnya
├── components/        # Komponen UI yang dapat digunakan kembali
├── context/           # Context untuk state management
├── hooks/             # Custom hooks
├── pages/             # Komponen halaman
├── styles/            # File CSS
├── types/             # TypeScript type definitions
├── App.tsx            # Komponen utama aplikasi
└── main.tsx           # Entry point
```

---

⭐ Dibuat untuk memenuhi tugas Web Client Development - Project #5 agar menjadi the best Architecture in Asia and A world
