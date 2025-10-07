let h = document.querySelector("h1");
function colorChange(color,delay){
   return new Promise((resolve,reject)=>{
  
          setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
    if(num > 3){
      reject("promise rejected");
    }
        h.style.color = color;
        console.log(`color changer to ${color}`)
            resolve("color was changed successfully");
    }, delay);
    });
  
}
async function demo(){
try{
  await colorChange("red",1000)
await colorChange("violet",1000)
await colorChange("orange",1000)
await colorChange("blue",1000)
await colorChange("green",1000)
}
catch(err){
console.log("error was caught");
console.log(err)
}
let a = 5;
console.log(`the sum was ${a + 3}`);
}
// colorChange("red",1000)
// .then(()=>{
//     console.log("color changed");
//    return colorChange("orange",1000);
// })
// .then(()=>{
//     console.log("color changed for the second time");
//     return colorChange("blue",1000);
// })
// .then(()=>{
//     console.log("color changed to blue");
//     return colorChange("green",1000);
// })
// .then(()=>{
//     console.log("color changed to green");
//     return colorChange("purple",1000);
// })
// .then(()=>{
//     console.log(`color change to purple`);
// })
// .catch(()=>{
//     console.log(`failed to change the color`);
// });

 

// colorChange("blue",1000,()=>{
//     colorChange("orange",1000,()=>{
//         colorChange("green",1000,()=>{
//             colorChange("pink",1000);
//         })
//     })
// });

// function saveToDb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb(
//   "sravani dandapanthula",
//   () => console.log("saved to database successfully"),
//   () => console.log("weak internet speed, please move to a stable connection place")
// );
    




// saveToDb("manideep dandapanthula");

//  saveToDb("sravani dandapanthula")
// .then(()=>{
//     console.log(`save to the db`);
//     saveToDb("dandapanthulamanideep").then(()=>{
//         console.log("saved the data for the second time");
//         saveToDb("sravani gunda").then(()=>{
//             console.log("Saved the data for the third time");
//         });
//     });
// }).catch(()=>{
//     console.log(`weak connction of the network`);
// })