var jmlAngkot = 10;
var angkotBeroperasi = 5;
var noJalanAngkotLembur = new Set([6, 8]);

for (var nomorAngkot = 1 ; nomorAngkot <= jmlAngkot ; nomorAngkot++) {
    if ( noJalanAngkotLembur.has(nomorAngkot) ) {
        console.log ('Angkot No. ' + nomorAngkot + ' lagi lembur');
    } else if ( nomorAngkot <= angkotBeroperasi) {
        console.log ('Angkot No. ' + nomorAngkot + ' beroperasi');
    } else {
        console.log ('Angkot No. ' + nomorAngkot + ' tidak beroperasi');
    }
}

console.log ('sukses');

// const mobilLembur = new Set([3, 8, 19]);
// const mobilTidakBeroperasi = new Set([2, 4, 20]);

// for (let nomorMobil = 1; nomorMobil <= 50; nomorMobil++) {

//     if (mobilTidakBeroperasi.has(nomorMobil)) {
//         console.log(`Mobil No. ${nomorMobil} tidak beroperasi`);
//     } 
//     else if (mobilLembur.has(nomorMobil)) {
//         console.log(`Mobil No. ${nomorMobil} lembur`);
//     } 
//     else {
//         console.log(`Mobil No. ${nomorMobil} beroperasi`);
//     }

// }

const buah = new Set(["Apel", "Jeruk"]);
for (const item of noJalanAngkotLembur) {
    console.log(item);
}
