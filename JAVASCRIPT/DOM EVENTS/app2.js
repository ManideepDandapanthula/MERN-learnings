// let button = document.querySelector('button');

// button.ondblclick=function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
//     console.log("clicked two time")
// };
// button.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Mouse clicked one time ");
// });
// let iput = document.querySelector("input");
// iput.addEventListener("keydown",function(event){
//     console.log("Key was pressed  ");
//     if(event.code == "ArrowUp"){
//         console.log("U should move upwards");
//     }
//     else if(event.code == "ArrowDown"){
//         console.log(`u should move downward`);
//     }
//     else if(event.code == "ArrowLeft"){
//         console.log(`u should move to the left`);
//     }
//     else if(event.code == "ArrowRight"){
//         console.log(`u should move to the right`);
//     }
// })

// let form = document.querySelector('form');

// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // console.dir(form);   
    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`Hii,${user.value} usr password is set to ${pass.value}`);
// });
// let user = document.querySelector("#user");
// user.addEventListener("change",function(event){
//     event.preventDefault();   
//     console.log("INput changed");
//     console.log(`final value is ${this.value}`);
// })
// let input = document.querySelector("input");
// let p= document.querySelector("p");
// input.addEventListener("input",function(){
//     console.log(input.value);
//     p.innerHTML = input.value;
// });
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
div.addEventListener("click",function(){
    this.style.backgroundColor = "red"
})
