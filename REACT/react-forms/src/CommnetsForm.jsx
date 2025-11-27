import { useState } from "react"
import { useFormik } from "formik";
const validate =(value)=>{
    const error = {};
    if(!value.username){
        error.username = "Username cannot be empty";
    }
    return error;
};
export default function Commnetform({addNewComment}){
    // let [formdata,setFormdata] = useState({
    //     username:"",
    //     remarks:"",
    //     ratings:5,
    // });
    const formik = useFormik({
         initialValues:{
            username:"",
            remarks:"",
            ratings:5,
         },
         validate,
         onSubmit: values=>{
            // alert(JSON.stringify(values,null,2));
         },
    });
    // let handelInputChage = (event)=>{
    //         setFormdata((currdata)=>{
    //             return{...currdata,[event.target.name]:event.target.value}
    //         })
    // };
    // let handelSubmit = (event)=>{
    //     console.log(formdata);
    //     addNewComment(formdata)
    //     event.preventDefault();
    // }
    return(
<>
            <h3>this is a commnet form </h3>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="">UserName</label>
                <input type="text" placeholder="Enter the username" value={formik.values.username} name="username" onChange={formik.handleChange}/>
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br /><br /><br />
                <label htmlFor="">Remarks</label>
                <textarea name="remarks"  placeholder="Give your feedbacks🤗" id="" value={formik.values.remarks} onChange={formik.handleChange}></textarea>
                  {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
                 <br /><br /><br />
                 <label htmlFor="">Ratings</label>
                <input type="number" placeholder="ratings" min={1} max={5} value={formik.values.ratings} onChange={formik.handleChange} name="ratings"/>    

                 <br /><br /><br />
                 
               <button type="submit">Submit</button>
            </form>
</>
    )
}