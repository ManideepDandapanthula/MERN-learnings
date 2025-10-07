// const student = {
//     name:"manideep",
//     age: 19,
//     marks:{
//         math:20,
//         physics:18,
//         telugu:20,
//     },
//     getAvg(){
//         console.log((this.marks.math + this.marks.physics+this.marks.telugu)/3);
//     }
// }
try{
    let a = "asshole";
    console.log(a);
}
catch{
    console.log("catch block is executed because there is an undeclared variable");
}
const sum = (a,b)=>(
     a +b
);
let summm = sum(10,20);
console.log(summm);
setTimeout(()=>{
    console.log("This is the timeout function sample")
},6900);
// setInterval(()=>{
//     console.log("This is the sample code for the set Interval function ");
// },2000);