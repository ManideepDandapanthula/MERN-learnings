import { useState } from "react"
import Commnetform from "./CommnetsForm";

export default function Comments(){
    let [comments,setComments] = useState([{
        username:"example User",
        remarks:"Mention the remarks",
        ratings:5
    }]);
    let addNewComment = (comment) =>{
        setComments((currComment) => [...currComment,comment])
    }
    return(
        <>
            <div><h3>All Commnets</h3></div>
            <div className="comments">
                <span>
                    {
                        comments.map((comment,idx)=>{
                            return(
                            <div className="commentsnew" key={idx}>
                            <h3 > {comment.username}</h3>
                      
                            <h3>{comment.remarks}</h3>
                           
                            <h3 >{comment.ratings}</h3>
                           </div>
                            )
                        })
                    }
                </span>

            </div>
            <Commnetform addNewComment={addNewComment}/>
        </>
    )
}