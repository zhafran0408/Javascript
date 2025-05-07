//  deklarasi arrow function
const namafungsi = (parameter) => {
  return hasil;
};

// contoh
const tambah = (a, b) => {
  return a + b;
};
console.log(tambah(3, 4));

// refactor
const perkalian = (y, x) => y * x;
console.log(perkalian(4, 5));

// jika hanya satu parameter, kurung bisa di hilangkan
// const menyapa = (nama) => "Halo, ${nama}!";
// console.log(menyapa("andi"));

// perbedaan
// function fungsibiasa(){
    // console.log(this); mengacu ke objek pemanggil
// }

// function fungsiArrow = () => {
    // console.log(this); mengacu ke 'this' dari lingkup luar
// }
