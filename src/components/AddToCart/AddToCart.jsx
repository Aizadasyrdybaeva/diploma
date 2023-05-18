import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
//import imgcart from "../../assets/cart.png"

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  const currentCount = cart[product.id] ? cart[product.id] : 0;
  function onAddToCart() {
    setCart({
      ...cart,
      [product.id]: currentCount + 1,
    })
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCart} className="CartButton">BUY</button>
  
      
    </div>
  ) 
}