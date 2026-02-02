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
var B = '';
for (var jumlahBintang = 0; jumlahBintang < 10; jumlahBintang++) {

    for (var spasi = 9; spasi >= jumlahBintang; spasi--) {
        s += ' ';
    }
    for (var j = 0; j <= jumlahBintang; j++) {
        s += '*';
    }
    for (var k = 0; k < jumlahBintang; k++) {
        s += '*';
    }
    for (var l= 10; l >= jumlahBintang; l--) {
        s += ' ';
    }
    for (var m = 10; m >= jumlahBintang; m--) {
        s += ' ';
    }
    for (var n = 0; n <= jumlahBintang; n++) {
        s += 'a';
    }
    for (var o = 1; o <= jumlahBintang; o++) {
        s += 'a';
    }
    s += '\n';
}


for (var jumlahBintang = 10; jumlahBintang >= 0; jumlahBintang--) {
    for (var spasi = 9; spasi >= jumlahBintang; spasi--) {
        B += ' ';
    }
    for (var bintang = jumlahBintang; bintang >= 0; bintang--) {  
        B += '*';
    }
    for (var l = jumlahBintang; l > 0; l--) {  
        B += '*';
    }
    for (var spasi2 = 11; spasi2 > jumlahBintang; spasi2--) {
        B += ' ';
    }
    for (var i = 11; i > jumlahBintang; i--) {
        B += ' ';
    }
    for (var a = jumlahBintang; a >= 0; a--) {
        B += 'a';
    }
    for (var a2 = jumlahBintang; a2 > 0; a2--) {
        B += 'a';
    }
    
    B += '\n';
}
console.log(s + B);

var pagar = '';
var wow = 10;
for (var z = 0; z < wow; z++) {
    
    if (z % 2 == 0) {
        for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 1; j++) {
            pagar += ' ';
        }
        pagar += '#';
        }
    }else {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 1; j++) {
                pagar += '#';
            }
            pagar += ' ';
        }
    }pagar += '\n';
}
console.log(pagar);

//pascal triangle belum jadi
var i, j;






var s = '';

for( i = 1 ; i <= 10 ; i++){
   for( j = 1; j <= 10 ; j++){
        
     if(j + 1 <= i ){
          s += '0';
     }
     else{
          s += '*';
     }
   }
    s += '\n';
}

console.log(s);
//pakai logika pertambahan + nanti, untuk menggabungkan bintang nya
