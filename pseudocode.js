// Algortima Pseudocode

/** 
* 1. Algoritma dan Pseudocode keliling Persegi Panjang 
     - Tentukan Panjang Persegi Panjang
     - Tentukan Lebar Persegi Panjang
     - Tentukan Rumus Keliling
     - Hitung K = (P+L)*2
*/

    // Mendefinisikan fungsi untuk menghitung keliling persegi panjang
    function hitungKelilingPersegiPanjang(panjang, lebar) {
        return 2 * (panjang + lebar);
    }

    // Meminta pengguna untuk memasukkan panjang dan lebar persegi panjang
    let panjang = parseFloat(prompt("Masukkan panjang persegi panjang:"));
    let lebar = parseFloat(prompt("Masukkan lebar persegi panjang:"));

    // Menghitung keliling persegi panjang
    let keliling = hitungKelilingPersegiPanjang(panjang, lebar);

    // Menampilkan hasil keliling
    console.log("Keliling persegi panjang adalah: " + keliling);
