import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product_id, name, price, image_url } = props.item;
  return (
    <div className="product-container">
      <div className="image-container">{image_url}</div>
      <div className="info-container">
        <div className="price-container">{price}</div>
        <div className="name-container">{name}</div>
        <div className="product-btn-cont">
          <button 
            className="product-btn"
            onClick={() => props.deleteItem(product_id)}>Delete</button>
          <Link   
            to={`/edit/${product_id}`}
            className="product-btn"
            onClick={() => {props.findItem(product_id, name, price, image_url); props.handleToggle()}}>Edit</Link>
        </div>
      </div>
    </div>
  );
}