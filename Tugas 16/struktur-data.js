// soal 1

const penduduk = {
  namedepan: "Slamet",
  namabelakang: "Santoso",
  umur: "45 tahun",
  pekerjaan: "petani",
  kota: "yogyakarta",
};

// destructuring
const { namedepan, namabelakang } = penduduk;
console.log(namedepan);
console.log(namabelakang);

//  dot notation
console.log(penduduk.pekerjaan);

// soal 2
let buahFavorit = ["Mangga", "Jeruk", "Apel"];
console.log(buahFavorit);

// yang ditambahkan
buahFavorit.push("Pisang");
console.log(buahFavorit);

//  yang diganti
buahFavorit[1] = "Anggur";
console.log(buahFavorit);

// yang dihapus
buahFavorit.splice(3, 3);
console.log(buahFavorit);

// cetak daftar buah yang terbaru
buahFavorit = ["Mangga", "Anggur", "Apel"];
console.log(buahFavorit);

// soal 3)
let menuRestoran = new Map();
menuRestoran.set("Nasi Goreng", "15000");
menuRestoran.set("Mie Ayam", "13000");
menuRestoran.set("Es Teh Manis", "5000");
menuRestoran.set("Ayam Bakar", "20000");

// tampilkan harga
console.log(menuRestoran.get("Mie Ayam"));

//  hapus menu
menuRestoran.delete("Es Teh Manis");
console.log(menuRestoran);

// cetak menu tersisa
console.log(menuRestoran);

//  soal 4
let koleksiBuku = new Set(["Laskar Pelangi", "Bumi", "Hujan"]);
koleksiBuku;

// Tambahkan buku
koleksiBuku.add("Filosofi Teras");
console.log(koleksiBuku);

// hapus buku
koleksiBuku.delete("Hujan");
console.log(koleksiBuku);

// Tampilkan Data Yang Terbaru
console.log(koleksiBuku);

// soal 5
// let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
// let pakaianWanita = ["Blouse", "Rok", "Cardigan"];

//  Gabungkan
const pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
const pakaianWanita = ["Blouse", "Rok", "Cardigan"];
let pakaianToko = [...pakaianPria, ...pakaianWanita];
console.log(pakaianToko);

// Tambahkan Produk
pakaianToko = [...pakaianPria, "kaos"];
console.log(pakaianToko);

// cetak update
console.log(pakaianToko);

// soal 6
// contoh :
// pesanMakanan = ("Nasi Goreng", "Sate Ayam", "Es Teh Manis");

// jawaban:
function pesanMakanan(...params) {
console.log("view", params);
}
pesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh Manis")