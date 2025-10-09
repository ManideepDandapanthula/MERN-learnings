const {sum,mul} = require("./math");
const fruits = require("./fruits/index")
let n = 5;
for(let i=0;i<n;i++){
    console.log(`Hellow ${i}`);
};
console.log(sum(10,20));
console.log(mul(20,2));
for(f of fruits){
    console.log(`${f.name}  color ${f.color}`);
}


