var nama = "zhafran";
console.log(nama);


let value = null ?? "default";
console.log(value);  

let username = undefined;
let displayName = username ?? "Guest";
console.log(displayName);  



for (let i = 0; i < 5; i++) {
    console.log(i);
    }

    for (let i = 0; i < 5; i++) {
        if (i === 2) {
          continue;
        }
        console.log(i);
      }