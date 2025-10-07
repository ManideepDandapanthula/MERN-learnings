let arr = [1,2,3,4,5];
console.log(arr);
let squares = arr.map((el)=>{
    return el*el;
});
console.log(squares);
let sum = arr.reduce((res,el)=>(res + el));
let avg = sum / arr.length;
console.log(sum,avg);
let duparr = arr.map((el)=>(
     el+5
));
console.log(duparr);
let charArr = [..."manideep"];
console.log(charArr);
let uppercaseArr = charArr.map((el)=>{
    return el.toUpperCase();
});
console.log(uppercaseArr);