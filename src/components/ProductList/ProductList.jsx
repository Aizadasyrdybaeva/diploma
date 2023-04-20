import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import AddtoCart from "../AddToCart/AddToCart";

export default function ProductList({category}) {
  const { products } = useContext(AppContext);

  const output = products
  .filter(product => product.category === category.id)
  .map((product) => (
    <div className="Product" key={product.id}>
      <img src={product.picture} alt={product.name} />
      <Link to={"/product/" + product.path}>{product.name}</Link>
      <span>{product.price} som </span>
      <AddtoCart product={product}/>
    </div>
  ));
  return <div className="ProductList">{output}</div>;
}
