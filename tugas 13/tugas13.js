function penjumlahan(angka1, angka2) {
  return (angka1+angka2)
}

function calculate(num1, num2, operation) {
  let result = operation(num1, num2);
  console.log("Hasil:", result);
}
calculate ( 10,3,penjumlahan);

function perkalian(angka1,angka2){
  return (angka1*angka2)
}
calculate (12,2,perkalian)
