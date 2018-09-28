import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { 
  handleNameInput,
  handlePriceInput,
  handleImgInput,
  clearInputs,
  addItem,
  editItem,
  getOne
 } from "../../ducks/reducer";

class Form extends Component {
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps, this.props.location.state)
  //    if(this.props.location.state.product_id !== +prevProps.match.params.id) {
  //     const { product_id, name, price, image_url } = this.props.location.state;
  //     this.editItem({product_id, name, price, image_url});
  //    } else if (!this.props.location.state) {
  //      null
  //    }
  // }

  // componentDidMount() {
  //   let id = this.props.location.pathname.match(/\d/g).join('');
  //   console.log(typeof(+id));
  //   this.props.location.pathname.includes("edit") ? this.props.getOne(+id) : this.props;
  // }

  render() {
    console.log(this.props)
    const { product_id, name, price, image_url } = this.props;
    const { handleNameInput, handlePriceInput, handleImgInput, clearInputs, addItem, editItem } = this.props; 
    // const { state } = this.props.location;
    return (
      <div className="form-container">
        <div className="image-holder"></div>
        <h3 className="form-title">Image URL: </h3>
        <input 
          placeholder="Image URL" 
          type="text" 
          onChange={e => handleImgInput(e.target.value)} 
          value={image_url}
          className="form-input" />
        <h3 className="form-title">Product Name: </h3>
        <input 
          placeholder="Name" 
          type="text" 
          onChange={e => handleNameInput(e.target.value)} 
          value={name}
          className="form-input" />
        <h3 className="form-title">Price: </h3>
        <input 
          placeholder="Price" 
          type="number" 
          onChange={e => handlePriceInput(e.target.value)} 
          value={price}
          className="form-input" />
        <div className="form-btn-cont">
          <button
            className="form-btn" 
            onClick={() => clearInputs()}>Cancel</button>
          {!this.props.location.pathname.includes('edit') ?
            <Link
              to='/'
              className="form-btn" 
              onClick={() => {addItem(name, price, image_url); clearInputs()}}>Add To Inventory
            </Link>
            :
            <Link
              to='/'
              className="form-btn" 
              onClick={() => {editItem(product_id, name, price, image_url)}}>Save Changes
            </Link>
          }
        </div>
      </div>
    );
  }
}
console.log(this.name);

const mapStateToProps = state => state;

export default connect(mapStateToProps, {handleNameInput, handlePriceInput, handleImgInput, clearInputs, addItem, editItem, getOne})(Form);