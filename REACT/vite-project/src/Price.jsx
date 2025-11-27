function Price({oldPrice,newPrice}){
    let oldStyle = {
        textDecorationLine: "line-through"
    }
    let newStyles={
        fontWeight: "bold",
    }
    let style = {
        backgroundColor : "gold",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }
    return(
        <div className=""style={style}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}
 export default Price