import { Shoppingmall } from "../utlis/Shopingmall"
import ShoppingCard from "./shopingcard"



const Shoppingmallitems=({cart,setcart})=>{
    return(
        <>
        <div class='shopingborder'>
            {
                Shoppingmall.map((element)=>(
                    <ShoppingCard   {...element} cart={cart} setcart={setcart}/>
                ))
            }
        
        </div>
        </>
    )
    
}
export default Shoppingmallitems