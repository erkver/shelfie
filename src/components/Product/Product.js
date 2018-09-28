import React,{ Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteItem } from "../../ducks/reducer";

class Product extends Component {
  render() {
    const { product_id, name, price, image_url } = this.props.item;
    const { deleteItem, getOne } = this.props;
    // console.log(this.props);
    return (
      <div className="product-container">
        <img className="image-container" src={image_url}/>
        <div className="info-container">
          <div className="price-container">{price}</div>
          <div className="name-container">{name}</div>
          <div className="product-btn-cont">
            <button 
              className="product-btn"
              onClick={() => deleteItem(product_id)}>Delete</button>
            <Link   
              to={`/edit/${product_id}`}
              className="product-btn"
              onClick={() => getOne(product_id, name, price, image_url)}
              >Edit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {deleteItem})(Product);