import { useState } from "react" 

const ShoppingCard = ({image, Product, dollar, rating, cart, setcart}) => {
    
   
    const [btntxt,setbtntxt]=useState("Add to Cart")
return (
    <>
        <div class='shopcontainer'>
            <img class="shopposter" src={image}></img>
            <div class="cartinside">
                <h3>{Product}</h3>
                <h4>{rating}</h4>
                <h4>{dollar}</h4>
                <button class="buttonstyle"  onClick={()=>{
                   btntxt=="Add to Cart"?setbtntxt("Remove cart"):setbtntxt("Add to Cart")
                   btntxt=="Add to Cart"?setcart(cart+1):setcart(cart-1)
                }}>
                    {btntxt=="Add to Cart"?"Add to Cart":"Remove cart"}</button>
            </div>
            {/* <button></button> */}
        </div>
    </>
)
}
export default ShoppingCard