// const student ={
//     name:"manideep",
//     prop: this,
//     age:45,
//     getName :function(){
//         console.log(this.name);
        
//     }
// }
// const squareReturn = (n)=>(
//    n*n
// );

// let square = squareReturn(4);
// console.log(square)
// console.log(student.getName());

//   const id =   setInterval(()=>{
//         console.log("Hello world");
//     },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000)
let arr = [1,2,3,4,5];
arr.forEach((num)=>{
    console.log(num);
})
let objArr= [{name:"Manideep",marks:95},{name:"Sravani",marks:100},{name:"Shreaysnh",marks:100}];
objArr.forEach((vals)=>{
    console.log(vals.name);
});
let double = arr.map((nums)=>{
    return nums*2;
});
let sqrs = arr.map((nums)=>{
    return nums*nums;
});
double.forEach((vals)=>{
    console.log(vals)
});
let gpa = objArr.map((nums)=>{
    return (nums.marks)/10;
});
let even = arr.filter((num)=>
    (num%2==0)
);
let finalAns = arr.reduce((ans,el)=>{
    console.log(ans);
    return ans + el;
});
console.log(`The final values of the reduce finctionand the ans values are ${finalAns} `);
let nmbers = [1,2,3,4,5,6,7,8,9,11];
let maxxx = nmbers.reduce((maxxx,val)=>{
    if(maxxx < val){
        return val;
    }
    else{
        return maxxx;
    }
});
console.log(maxxx);
let x = [10,20,30,40,50];
console.log(x.every((el)=>{
    return  (el%10 == 0)
}));


let evenArr = [2,4,6];
let oddArr = [1,3,5];
let evenOdd = [...evenArr,...oddArr];
evenOdd.sort();
let teacher = {
    gmail:"manideep@gmail.com",
    password:123,
};
let teacher_copy = {...teacher,id:12};
function sum(...asshole){
    return asshole.reduce((an,el)=> an+el);
}
let summm = sum(2,3,4,5,6,1);
console.log(summm);
const students = {
    name:"Manideep",
    class:16,
    age: 22,
    subjects:["Hindi","English","Math","Science"],
    mail:"sravani@gmail.com",
    pass:"manideep",
};
let {mail,pass} =students;
