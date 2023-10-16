function showCategory(category) {
    // Sembunyikan semua konten kategori terlebih dahulu
    document.getElementById('kalkulator-kalori').style.display = 'none';
    document.getElementById('chat-dokter').style.display = 'none';
    document.getElementById('produk').style.display = 'none';
  
    // Tampilkan konten yang sesuai dengan kategori yang di-klik
    document.getElementById(category).style.display = 'block';
  }
  