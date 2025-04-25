//  soal 1
function greets(){
console.log("Hello,WOrld!");
}
 greets()

// soal 2
function showMessage(){
    console.log("ini adalah variabel lokal");
}
showMessage()

// soal 3
let username= "guest"
function updateusername() {
    console.log(username);
    username = "admin";
    console.log(username);
}
updateusername()

// soal 5
function greet(name = "user"){
console.log(`Hello, ${name}!`);

}

greet("alya") 
greet()

// soal 6
function setuser(username = "guest") {
   console.log(`welcome, ${username}!`);
    
}
setuser()
setuser("Rafi")

// soal 7
function add (x,y){
    return x+y
}
console.log(add(10,7));