alert ('ini adalah program sederhana kecocokan cinta');

var data1 = false;
var data2 = false;

while (data1 === false) {
    var nama1 = prompt ('siapa nama kamu?');
    var cekBoolean = Boolean(nama1);
    data1 = cekBoolean;
}

while (data2 === false) {
    var nama2 = prompt ('siapa nama dia?');
    var cekBoolean2 = Boolean(nama2);
    data2 = cekBoolean2;
}

var hasilconfirm = confirm ('apakah ' + nama2 + ' mencintai ' + nama1 + ' ?');

if (hasilconfirm === true) {
    alert ('kamu cinta dia selamat');
} else {
    alert ('kasihan :(');
}
