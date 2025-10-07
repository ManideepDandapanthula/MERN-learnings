let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let ipt = document.querySelector("input");
btn.addEventListener("click",function(){
    let newLi = document.createElement("li");
    newLi.innerText = ipt.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    newLi.appendChild(delBtn)
    ul.append(newLi);
    ipt.value = "";

});
ul.addEventListener("click",function(event){
    if(event.target.nodeName = "BUTTON"){
        let listItme = event.target.parentElement;
        listItme.remove();
    }
})
let delebtn = document.querySelectorAll(".delete");
for(let del of delebtn){
    del.addEventListener("click",function(){
    let par = this.parentElement;
    par.remove();
   
})
}