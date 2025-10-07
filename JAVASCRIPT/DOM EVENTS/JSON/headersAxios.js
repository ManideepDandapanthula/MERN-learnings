// let url = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const header = {headers : {Accept:"application/json"}};
//         let res = await axios.get(url);
//         console.log(res);
//     }
//     catch(e){
//         console.log(`erroe occured!!! ${e}`);
//     }
// } 
let url = "http://universities.hipolabs.com/search?name=";
let conunty = "nepal";
let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
   let collegsState = await getColleges(country); 
   show(collegsState);

});


async function getColleges(country) {
    try{
        let res = await axios.get(url+country );
        // console.log(res);
        return (res.data);
    }
    catch(e){
        console.log(`there is an error ${e}`);
    }
}
async function show(colleges) {
    let list = document.getElementById("list");

    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name + " in the state " + col["state-province"];
        list.appendChild(li);
    }
}
