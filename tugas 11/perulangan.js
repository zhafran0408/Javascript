// soal 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// soal 2
let a = 10;
do {
  console.log(a);
  a--;
} while (a >= 1);
// soal 3
for (let b = 2; b <= 20; b++) {
  console.log(b % 2 === 0);
  console.log(b);
  if (b% 2===0) {
   console.log(b);
  }
}
// soal 4

for (let c = 1; c <= 10; c++){
  if (c===5) continue;{
    console.log(c); 
  }
}
// soal 5

for (let d = 1; d <= 10; d++){
  if (d===6) break;{
    console.log(d); 
  }
}