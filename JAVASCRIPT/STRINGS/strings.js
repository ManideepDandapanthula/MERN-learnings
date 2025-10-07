let strName = "Manideep";
let foundIdx = findIndex("nr",strName);
console.log(foundIdx);
function findIndex(x,stringnam){
   let index = stringnam.indexOf(x);
   return index;
}
let message = "    I LOVE coading For fun    ";
let trimstr = message.toUpperCase().trim();
console.log(trimstr);
let temp = strName.slice(0,4);
console.log(temp);
console.log(temp.length);
console.log(strName.slice(-2));
console.log(strName.replace("Mani","sravani"));
console.log(strName.replace('e','r'));
let msg = "i am manideep";
console.log(msg.repeat(6));
console.log(strName.slice(2,6));
console.log(strName.slice(4));
console.log(strName.slice(0,8));
console.log(strName.indexOf('p'));
console.log(strName.length);