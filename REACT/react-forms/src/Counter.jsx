import { useState,useEffect } from "react";

export default function Counter(){
    let [count,setCount] = useState(0);
    let handeclick = ()=>{
        setCount(newCount => newCount+1)
    }
    useEffect(function sideEffect(){
        console.log("This is the side effect of the use effect ");
    })
    return (
        <>
             <h1>counter = {count}</h1>
             <button onClick={handeclick}>Increase</button>
        </>
    )
}