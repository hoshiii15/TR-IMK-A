// Fungsi untuk menentukan apakah dark mode aktif atau tidak
function isDarkMode() {
  // Periksa local storage, jika belum ada, kembalikan false
  return localStorage.getItem('darkMode') === 'true';
}

// Fungsi untuk memperbarui tema halaman berdasarkan status dark mode
function updateTheme() {
  const isDark = isDarkMode();
  const darkModeIcon = document.getElementById('dark-mode-icon');

  // Ganti warna latar belakang dan teks sesuai dengan mode
  document.body.style.backgroundColor = isDark ? '#000' : '#fff';
  document.body.style.color = isDark ? '#fff' : '#000';

  // Menerapkan transformasi untuk membalikkan ikon saat dark mode aktif
  darkModeIcon.style.transform = isDark ? 'scaleX(-1)' : 'scaleX(1)';
}

// Fungsi untuk mengubah status dark mode dan memperbarui tampilan
function toggleDarkMode() {
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const isDark = isDarkMode();

  // Toggle status dark mode
  localStorage.setItem('darkMode', !isDark);

  // Panggil fungsi untuk memperbarui tema halaman
  updateTheme();
}

// Panggil fungsi untuk memperbarui tema saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  updateTheme();
});

// Setelah halaman dimuat, panggil fungsi untuk memeriksa status dark mode
// dan memperbarui tema secara otomatis
updateTheme();
