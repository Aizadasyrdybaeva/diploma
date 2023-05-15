import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css"
import cart1 from "../../assets/cart.png"

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
         <span><button><img src={cart1}></img></button></span>
         ({total})
      </Link>
    </div>
  );
}
