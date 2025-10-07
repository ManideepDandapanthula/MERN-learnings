let url = "https://catfact.ninja/fact";

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click",async (event)=>{
// let facts = await getFacts();
// let para = document.getElementById("para");
// para.innerText = facts;
// console.log(facts)
let link = await getImage();
let img = document.querySelector("#image");
img.setAttribute("src",link);
console.log(link);
})

async function getImage(){
  try{
    let res  =await axios.get(url2);
  // console.log(repsonce.data.getFacts );
  // return res.data.fact;
  let urlImage = res.data.message;
  return urlImage;
  
  }
  catch(e){
    console.log(`error was occured ${e}`);
    return `No fact Found `;
  }

}