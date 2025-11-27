import { useState } from "react";
function init(){
    return Math.floor(Math.random()*4);
}
function Counter(){
    let[count,setCount] = useState(0);
    // console.log(arr);
    let increaseCount = ()=>{
        setCount(count+1);
        // console.log(count);
    }
    console.log("the code is getting re=rendered");
    return(
        <>
            <h3>The count is {count}</h3>
            <button onClick={increaseCount} className="button">Count is {count}</button>
        </>
    )

}



export default Counter;