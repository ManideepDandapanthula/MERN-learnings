const maxx = prompt("Enter the max range of the number");

const random = Math.floor(Math.random()* maxx) +1;


let guess = prompt("Enter ur guess");
while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    else if(guess == random){
       alert("the guess of the user was right and u won the game");
        break;
    }
    else if(guess < random){
        guess = prompt("Ur guess was too small please try again");
        
    }
     else{
         guess = prompt("Ur guess was larger than the number please try again ");
     }
}
