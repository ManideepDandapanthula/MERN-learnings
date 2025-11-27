import "./Product.css"
import Description from "./Description";
import Price from "./Price";
function Product({title,idx}){
    let oldPrices= ["12,495","11,900","1599","599"];
    let newPrice = ["8,999","7,999","999","299"];
    let description = [
  ["8,000 DPI", "High-precision sensor for accurate tracking"],
  ["smooth and intutive surface", "Touch-friendly design for easy navigation"],
  ["designed for ipad Pro", "Optimized to work seamlessly with iPad Pro features"],
  ["good For gaming", "Responsive performance suitable for fast-paced games"]
];

    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Product;