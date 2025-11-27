import Lottery from "./Lottery"

import { sum } from "./helper";
export default function LotteryTicket(){
    let winCondition = (ticket) =>{
        return ticket.every((num)=> num === ticket[0]);
    }
    return(
        
        <Lottery n={3} winCondition={winCondition}/>
    )
}