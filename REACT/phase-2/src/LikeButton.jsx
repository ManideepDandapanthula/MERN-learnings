import { useState } from "react";

function LikeButton(){
    let handelLikeClick=()=>{
       setLikeState(!like);
       setClicks(clicks+1);
       
    }
    const [like,setLikeState] = useState(false );
    const  [clicks,setClicks] = useState(0);
        return(
            <>
            <p>Likes Count: {clicks}</p>
           <p onClick={handelLikeClick}>
             {like ? (<i>❤️</i>):(<i>🖤</i>)}
           </p>
            </>
        )
}


export default LikeButton;