import { use, useState } from "react"

export default function Form(){
    // let [text,setTextState] = useState("");
    // let [username,setusername] = useState("");
    // let [email,setEmail] = useState("");
    let [formData,setFormData] = useState({
        fullName:"",
        userName:"",
    });
//   let setname = (event)=>{
//         // console.log(event.target.value);
//         setTextState(event.target.value)
//   }
//   let setUsername = (event)=>{
//         // console.log(event.target.value);
//         setusername(event.target.value)
//   }
//   let setuserEmail = (event)=>{
//         // console.log(event.target.value);
//         setEmail(event.target.value)
//   }
let handelOnChange = (event)=>{
        let fieldname = event.target.name;
        let newValue = event.target.value;
        setFormData((currData)=>{
            currData[fieldname] = newValue;
            return {...currData};
        });
        
}
 return(
    <>
        <form action="">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" placeholder="enter the name" onChange={handelOnChange} value={formData.fullName} id="fullname" name="fullName"/>
            {/* <button className="submit">Submit</button> */}
        </form>
        <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="enter the username" value={formData.userName} onChange={handelOnChange} id="username" name="userName"/>
            {/* <button className="submit">Submit</button> */}
        </form>
        {/* <form action="">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="example@xyz.xom" onChange={setuserEmail} value={email} id="email"/>
            <button className="submit">Submit</button>
        </form>
        <form action="">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder=""   id="password"/>
            <button className="submit">Submit</button>
        </form> */}
    </>
 )
}