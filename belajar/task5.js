// var makanan = prompt("Masukkan makanan favoritmu: \n 1. Nasi Goreng \n 2. Mie Ayam \n 3. Sate \n 4. Gado-Gado \n 5. Esteh \n 6. Jus Alpukat");

// switch (makanan) {
//     case "Nasi Goreng":
//     case "Mie ayam":
//     case "Sate":
//         alert('ini makanan');
//         break;
//     case 'esteh' :
//     case 'jus alpukat':
//         alert('ini minuman');
//         break;
//     default:
//         alert('makanan / minuman tidak tersedia');
// }

// kalau === ini wajib sama persis sampai tipe data
// kalau == ini cuma nilai saja yang dibandingkan
// prompt itu selalu mengembalikan string

// += itu artinya nambahin nilai ke variabel yang sama
// contoh:
// var a = 5;
// a += 3; // artinya a = a + 3 -> hasilnya 8

// const notifications = ["Notif A", "Notif B", "Notif C"];

// // Membaca dari pesan terbaru ke terlama
// for (let i = notifications.length - 1; i >= 0; i--) {
//   console.log("Menampilkan: " + notifications[i]);
// }

var s = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

var s = '';
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

