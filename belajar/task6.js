//suit vs comp cek apakah player mengetik batu, gunting, kertas
// pengunaan != (tidak sama dengan) jadi player harus mengisi sesuai pilihan
// penggunaan && (dan) untuk menggabungkan beberapa kondisi

        // player = '';
        // while ( player !== 'batu' && player !== 'gunting' && player !== 'kertas' ) {
        //     player = prompt("Pilih: batu, gunting, kertas");
        // }
// penggunaan while mempunyai minus player harus mengisi sesuai pilihan sama persis

        // player = '';
        // while ( player !== 'batu' && player !== 'gunting' && player !== 'kertas' ) {
        //     player = prompt("Pilih: batu, gunting, kertas").toLowerCase();
        // }

// pengginaan .toLowerCase() agar inputan player tidak case sensitive

        // var computer = Math.random();
        // if (computer < 0.34) {
        //     computer = "batu";
        // } else if (computer <= 0.67) {
        //     computer = "gunting";
        // } else {
        //     computer = "kertas";
        // }

        // console.log("Player memilih: " + player);
        // console.log("Computer memilih: " + computer);

        // var hasil = '';
        // if (player == computer) {
        //     hasil  = "Seri!";
        // } else if ( player == "batu" ) {
        //     hasil = computer == 'gunting' ? 'Menang!' : 'Kalah!';
        // } else if ( player == "gunting" ) {
        //     hasil = computer == "kertas" ? 'Menang!' : 'Kalah!';
        // } else if ( player == "kertas" ) {
        //     hasil = computer == "batu" ? 'Menang!' : 'Kalah!';
        // } else {
        //     hasil = "Pilihan tidak valid!";
        // }
        // alert(hasil);

// penggunaan ? true : false

//mari kita mencoba agara bisa looping game nya mengunakan while

        // var mulaiUlang = false;
        // while ( mulaiUlang === false ) { 

        //         player = '';
        //         while ( player !== 'batu' && player !== 'gunting' && player !== 'kertas' ) {
        //             player = prompt("Pilih: batu, gunting, kertas").toLowerCase();
        //         }

        // // pengginaan .toLowerCase() agar inputan player tidak case sensitive

        //         var computer = Math.random();
        //         if (computer < 0.34) {
        //             computer = "batu";
        //         } else if (computer <= 0.67) {
        //             computer = "gunting";
        //         } else {
        //             computer = "kertas";
        //         }

        //         console.log("Player memilih: " + player);
        //         console.log("Computer memilih: " + computer);

        //         var hasil = '';
        //         if (player == computer) {
        //             hasil  = "Seri!";
        //         } else if ( player == "batu" ) {
        //             hasil = computer == 'gunting' ? 'Menang!' : 'Kalah!';
        //         } else if ( player == "gunting" ) {
        //             hasil = computer == "kertas" ? 'Menang!' : 'Kalah!';
        //         } else if ( player == "kertas" ) {
        //             hasil = computer == "batu" ? 'Menang!' : 'Kalah!';
        //         } else {
        //             hasil = "Pilihan tidak valid!";
        //         }
        //         alert(hasil);
        // }

// mari kita coba menggunakan confirm untuk mengulang game nya
// setelah aku baca penggunaan selain while itu tidak praktis, ada yang lebih mudah yaitu menggunakan do ... while tetapi ini belum di pelajari