console.log("apple" > "banana");
console.log(null == undefined);
console.log(5 === "5");

let umur1 = 20;

if (umur1 > 19) {
  console.log("anda sudah dewasa");
} else {
  console.log("anda masih di bawah umur");
}

let warna = "merah";
switch (warna) {
  case "merah":
    console.log("Jalan");
    break;
  case "kuning":
    console.log("Stop");
    break;
  case "hijau":
    console.log("Hati-hati");
    break;
  default:
    console.log("Warna tidak dikenal");
}

if ("0") {
  console.log("Benar");
} else {
  console.log("Salah");
}

//   let nilai_semester2 = 85;
// let hasil = nilai_semester2 > 90 ? "A" : nilai_semester2 > 80 ? "B" : "C";
// console.log(hasil);

// if (nilai > 70){
//    console.log(hasil ="tidak lulus");
// } else{
//   console.log(hasil= "lulus");
// }

let nilai_semester1 = 50;

if (nilai_semester1 >= 90) {
  console.log("A");
} else if (nilai_semester1 >= 75) {
  console.log("B");
} else if (nilai_semester1 >= 60) {
  console.log("C");
} else if (nilai_semester1 >= 40) {
  console.log("D");
}

// let nilai = 80;
// if (nilai > 70) {
//   console.log("Lulus");
// } else {
//   console.log("Tidak Lulus");
// }

if (null) {
  console.log("Benar");
} else {
  console.log("Salah");
}

let nilai = 60;
let hasil = nilai > 70 ? "Lulus" : "Tidak Lulus";
console.log(hasil);
