import Product from "./Product";

function ProductTab(){
    let styles = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent:"center"
            // alignItems:"center"
    };
    return (
     <div className="Parent" style={styles}>
        <Product title="LogitechMouse" idx={0}/>
        <Product title="Apple magic Pecil" idx={1}/>
        <Product title="Zebronic Zeb-Transfer" idx = {2}/>
        <Product title="Pertonics Toad 23" idx ={3}/>
     </div>
    )
}
export default ProductTab;