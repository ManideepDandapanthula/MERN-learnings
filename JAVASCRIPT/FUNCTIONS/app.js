// function fName(){
//     return "Manideep dandapanthula";
// }
// let name = fName();
// console.log(name);
// let age = prompt("Enter the your age");
// let isAdult = verifyAge(age);
// console.log(isAdult);
// function verifyAge(age){
//     if(age < 18){
//         return "U r not eligible for voting";
//     }
//     else{
//         return "Ur eligible for voting"
//     }
// }
// let randomNumber =(Math.floor(Math.random()*6)) + 1;
// console.log(randomNumber," is ur dice number");
// let number = isPrime(3);
// console.log(number);
// function isPrime(numm){
//     for(i = 2;i<=Math.sqrt(numm);i++){
//         if(numm % i ==0){ 
//             return `${numm} is not a prime number`;
            
//         }
//     }
//     return `${numm} is a prime number`;

// }
// let a = parseFloat(prompt("Enter the value of a"));
// let b = parseFloat(prompt("Enter the value of b"));
// let c = parseFloat(prompt("Enter the value of c"));

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     console.log("❌ Invalid input. Please enter numeric values only.");
// } else {
//     let average = calAvg(a, b, c);
//     console.log(`✅ The average of numbers ${a}, ${b}, and ${c} is ${average.toFixed(2)}`);
// }
// function calAvg(a, b, c) {
//     return (a + b + c) / 3;
// }

// printTable(9);
// function printTable(n ){
//     let i = 1;
//     while(i <= 10){
//         console.log(`${n} x ${i} = ${n*i}`);
//         i++;
//     }
// }
// let greet = "HELLOW";

// function changeGreet(){
//     let greet = "namestee";
//     console.log(greet);
//     function greenblack(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();

// let sum = function (a,b){
//     return a+b;
// }
// let res = sum(20,20);
// let greet = function (){
//     console.log("hellow");
// }

// function mullvlFunc(func,n){
//     for(let i=0;i<n;i++){
//         func();
//     }
// }
// mullvlFunc(greet,4);
const calculator={
    add: function(a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a *b;
    }
};
console.log(calculator.multiply(5,6));
console.log(calculator.add(3,4));
console.log(calculator.sub(10,2));c