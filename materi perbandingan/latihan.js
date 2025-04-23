let nilai = 81;
if (nilai >= 91) {
  console.log("nilaigrade: A");
} else if (nilai >= 81) {
  console.log("nilaigrade: B");
} else if (nilai >= 71) {
  console.log("nilaigrade: C");
} else {
  console.log("nilaigrade: D");
}


let hasil= 81;
let status = hasil >= 81 ? "lulus": "tidak lulus";
console.log(status );

let hasil_ujian = 81;
let grade = nilai > 91? "nilaigrade: A":
            nilai > 81? "nilaigrade: B":
            nilai > 70? "nilaigrade: C": "nilaigrade: D";
 console.log(grade);
 


let buah = "nangka";
switch (buah) {
  case "chery":
    console.log("ini adalah chery");
    break;
  case "nangka":
    console.log("ini adalah nangka");
    break;
  case "salak":
    console.log("ini adalah salak");
    break;
  case "salak dan nangka":
    console.log("ini adalah salak dan nangka");
    break;
  default:
    "nurudin tidak membeli buah apapun";
    console.log("nurudin tidak membeli buah apapun");
    break;
}

let saklar = undefined;
if(saklar){
    console.log("saklarnya hidup");
}
else  {
   console.log("saklar mati");
    
}