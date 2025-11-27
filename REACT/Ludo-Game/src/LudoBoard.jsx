import { useState } from "react"

function LudoBoard(){
    const [moves,setState] = useState({blue:0,red:0,yellow:0,green:0});
    let [arr,setArr] = useState(["no moves"]);
    let updateBlue = ()=>{
       
        setState((prevMoves)=>{
            return{...prevMoves,blue:prevMoves.blue+1};
        });
    };
    arr.push("blue moves");
    setArr(arr);
    console.log("")
    let updateRed = ()=>{
        
        setState((prevMoves)=>{
            return{...prevMoves,red:prevMoves.red+1};
        });
    };
    let updateGreen = ()=>{
        
        setState((prevMoves)=>{
            return{...prevMoves,green:moves.green+1};
        });
    };
    let updateYellow = ()=>{
       
        setState((prevMoves)=>{
            return{...prevMoves,yellow:moves.yellow+1};
        });
    };
    return(
        <>
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue Moves: {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Red Moves: {moves.red} </p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>Green Moves: {moves.green} </p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Yellow Moves: {moves.yellow} </p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
        </>
    )
}


export default LudoBoard;