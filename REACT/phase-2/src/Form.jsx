function Form(){
    return(
        <>
        <form action="">
            <input type="text" placeholder="Type Something" className="input"/>
            <button onClick={handleFormSubmmit}>submit</button>
        </form>
        </>
    );
}

function handleFormSubmmit(event){
    event.preventDefault();
    let text = document.querySelector(".input").value;
    console.log(text);
    console.log("Form was subbmited");
}


export default Form;