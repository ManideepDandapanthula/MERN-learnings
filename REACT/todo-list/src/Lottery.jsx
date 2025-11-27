import { useState } from "react";
import Button1 from "./Button1";
import "./Lottery.css"
import Ticket from "./Ticket";
import { genTicket,sum } from "./helper";
export default function Lottery({n,winCondition}){
    let [lottery,setLottery] = useState(genTicket(n));
    let isWinning = winCondition(lottery);
    let buyNewTicket = ()=>{
        setLottery(genTicket(n));   
    }
    return(
        <>
            <div className="ticket">
              
<label htmlFor="">Random Number:  </label> 
                <Ticket ticket={lottery}/>

            </div>
            <Button1 action={buyNewTicket}/>
            <h3>{isWinning && "Congratulations, You have won the lottery"}</h3>
        </>
    )
}