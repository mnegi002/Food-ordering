import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/cartProvider";
function App() {
  const [cartShow,setCartShow] = useState(false)

  const showHandler = ()=>{
    setCartShow(true)
  }

  const hideHandler = ()=>{
    setCartShow(false)
  }
  return (
    
    <CartProvider>
    {cartShow && <Cart onClose={hideHandler}/> } 
      <Header onShow = {showHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
