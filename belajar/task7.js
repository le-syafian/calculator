// let a;

// do {
//     a = prompt("Menghitung volume kubus\nMasukkan sisi kubus A (angka):");

//     // Jika dibatalkan
//     if (a === null) {
//         alert("Input wajib diisi.");
//         continue;
//     }

//     // Hilangkan spasi dan konversi ke number
//     a = a.trim();

// } while (a === "" || isNaN(a) || a === null);


// let b;

// do {
//     b = prompt("Menghitung volume kubus\nMasukkan sisi kubus B(angka):");

//     // Jika dibatalkan
//     if (b === null) {
//         alert("Input wajib diisi");
//         continue;
//     }

//     // Hilangkan spasi dan konversi ke number
//     b = b.trim();

// } while (b === "" || isNaN(b) || b === null);


// let volumeA = a * a * a;
// let volumeB = b * b * b;
// let totalVolume = volumeA + volumeB;

// alert ("volume kubus a: " + volumeA + "\nvolume kubus b: " + volumeB + "\ntotal volume: " + totalVolume);
// console.log(a);
// console.log(a);
// console.log(b);

// const title = "Volume Kubus";
// let a;

// do {
//     a = prompt(`${title}\nMasukkan sisi kubus:`);

//     if (a === null) continue;

//     a = a.trim();
// } while (a === "" || isNaN(a));

// const volume = Number(a) ** 3;
// alert(`Volume kubus: ${volume}`);

// while (true) {
//     let a = prompt("Masukkan sisi kubus A (angka):");
//     let b = prompt("Masukkan sisi kubus B (angka):");
//     function calculateCubeVolume(a, b) {
//         let volumeA = a * a * a;
//         let volumeB = b * b * b;
//         let totalVolume = volumeA + volumeB;
//         alert(`Volume kubus A: ${volumeA}\nVolume kubus B: ${volumeB}\nTotal Volume: ${totalVolume}`);
//     }
//     calculateCubeVolume(a, b);
// }

let pengulagan = true
while (pengulagan) {
    let a;
    
    do {
        a = prompt("Menghitung volume kubus\nMasukkan sisi kubus A (angka):");

        // Jika dibatalkan
        if (a === null) {
            alert("Input wajib diisi.");
            continue;
        }

        // Hilangkan spasi dan konversi ke number
        a = a.trim();

    } while (a === "" || isNaN(a) || a === null);
    
    let b;

    do {
        b = prompt("Menghitung volume kubus\nMasukkan sisi kubus B(angka):");

        // Jika dibatalkan
        if (b === null) {
            alert("Input wajib diisi");
            continue;
        }

        // Hilangkan spasi dan konversi ke number
        b = b.trim();

    } while (b === "" || isNaN(b) || b === null);


    let volumeA = a * a * a;
    let volumeB = b * b * b;
    let totalVolume = volumeA + volumeB;

   pengulagan = confirm ("volume kubus a: " + volumeA + "\nvolume kubus b: " + volumeB + "\ntotal volume: " + totalVolume +'\napakah anda akan mengulang?');
} 

