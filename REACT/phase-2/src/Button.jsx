function Button(){
    return(
        <div>
            <button onClick={printHellow}>
                click Me!
            </button>
            <p onMouseOver={saybye}> 
                i am Manideep Dandapanthula
            </p>
        </div>
    )
}
function printHellow(){
    console.log("Hellow world");
}
function saybye(){
    console.log("bye!!");
}



export default Button;