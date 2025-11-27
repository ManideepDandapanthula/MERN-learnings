function Activity({name,color}){
    let style = {color: color}
    return(
        <>
            <p style={style}>userName: {name}</p>
        </>
    )
}
export default Activity;