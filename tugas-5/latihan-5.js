// nomer 1
let permen_ana = 30;
let permen_diberikan_budi = 10;
let permen_sekarang = 40;
let permen_dikuadratkan = 1600;

// jawab
console.log(
  ` Hitunglah jumlah permen yang dimiliki Ana sekarang ${permen_sekarang}`
);

console.log(`Kuadratkan jumlah permen tersebut ${permen_dikuadratkan}`);

// nomer 2
let kucing_ana = 2;
let kucing_pertama = "ali";
let kucing_kedua = "hasan";
let digabungkan = kucing_pertama + kucing_kedua;

// jawab
console.log(
  `Tolong konversikan ke 2 nama kucing tersebut menjadi sebuah variable ${kucing_pertama} ${kucing_kedua}`
);

console.log(
  `Gabungkan 2 variable tersebut menjadi 1 kata tersebut ${digabungkan}`
);

// nomer 3
let belalang = "12";
let nyamuk = "11";
let angsa = 10;

let hasil_belalang_nyamuk = +belalang + nyamuk;
let hasil_nyamuk_angsa = +nyamuk + angsa;

// jawab
console.log(` Berapa hasil 2 Consol log diatas ${hasil_belalang_nyamuk}`);

console.log(` Berapa hasil 2 Consol log diatas ${hasil_nyamuk_angsa}`);

// penjelasan
// ditambah karena string
// kenapa bisa jadi seperti itu bukan hasilnya 22 karena 12+10=22
// ya ini karena number + number(10 +'11'= 21)

// nomer 4
let membeli_buku_fiksi = "25,000";
let membeli_buku_nonfiksi = "21,000";
let membeli_2pena = "4000";

let total = "50,000";

// jawab
console.log(`Total semua biaya yang harus dibayar Aisha adalah ${total}`);

// nomer 5
let penjumlahan1 = 5 + 3 * 2;
let penjumlahan2 = (5 + 3) * 2;

// jawab
console.log(`Berapakah hasil dari penjumlahan1 ? ${penjumlahan1}`);
console.log(`Berapakah hasil dari penjumlahan2 ? ${penjumlahan2}`);

// penjelasan
// seperti matematika saja yg dikali lebih dulu dikerjakan atau yang didalam kurung

//  nomer 6
let kresek = 4;
let kotak = 6;
let ember = 5 + (kresek = kotak);

// jawab
console.log(`Nilai isi kresek adalah ${kresek}`);

console.log(`Nilai isi kotak adalah ${kotak}`);

console.log(`Nilai isi ember adalah ${ember}`);

// penjelasan
// variabel disini sifatnya  mengikuti

//  nomer 7
let x, y, z;
z = 5 + 10 + 15;
x = y;
y = z;

console.log(`nilai x adalah  ${x}`);
console.log(`nilai y adalah ${y}`);
console.log(`nilai z adalah ${z}`);

// nomer 8
let money = 4;
money = money * 2;
money = money * 2;

console.log(`nilai variable money adalah ${money}`);

// nomer 9
let J = 5;
J++;
let K = 8;
K--;

// jawab
console.log(`Hasil variabel J adalah ${J} dan variable K adalah ${K}`);

let penjelasanJ = `ia menggunakan increment yang membuat variabel J bertambah 1.`;
let penjelasanK = `ia menggunakan decrement yang membuat variabel K berkurang 1.`;
console.log(
  `Hasil J demikian karena ${penjelasanJ} sedangkan variable K karena ${penjelasanK}`
);

// nomer 10
let room = "hafs";
let age = 18;
let shoesnumber = 42;
let married = false;

console.log(typeof room);
console.log(typeof age);
console.log(typeof shoesnumber);
console.log(typeof married);
