import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  // const {handleAddToCart} = props.handleAddToCart
  const { img, name, seller, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings}</small>
        </p>
      </div>
      <button onClick={()=>props.handleAddToCart(props.product)} className="btn-cart">
        <p className="btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} className="icon"></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
