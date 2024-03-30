import './App.css';


import Navbar from './Shopingmall/Navbar';
import SecondStage from './Shopingmall/SecondStage';
//import ShoppingCard from './Shopingmall/shopingcard';
import Shoppingmallitems from './Shopingmall/Shoppingmallitems';
import { useState } from 'react';


function App() {
  const [cart,setcart]=useState(0)

  //   const image="https://static.toiimg.com/thumb/msid-78181550,width-1280,resizemode-4/78181550.jpg" 
  //  const name="Siddhu"
  return (
    <div className="App">

    

   
      {/* <div class="priceborder">
        {
        Users.map((element) => (
        <ReactPrice    {...element} />))
        }
      </div> */}
     <Navbar cart={cart}/>
     <SecondStage/>
     <Shoppingmallitems cart={cart} setcart={setcart}/>
    
      
    </div>
  );
}

export default App;
