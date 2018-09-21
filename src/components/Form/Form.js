import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      name: "",
      price: 0,
      image_url: "",
      toggle: false
    }
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
    this.handleImgInput = this.handleImgInput.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.initializeEdit = this.initializeEdit.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  handleNameInput(e) {
    this.setState({name: e.target.value});
  }

  handlePriceInput(e) {
    this.setState({price: e.target.value});
  }

  handleImgInput(e) {
    this.setState({image_url: e.target.value});
  }

  clearInputs() {
    this.setState({name: "", price: 0, image_url: ""});
  }

  // initializeEdit(product_id, name, price, image_url) {
  //   // const { product_id, name, price, image_url } = this.props.editItem;
  //   // const { product_id, name, price, image_url } = this.props.selectItem
  //   this.setState({product_id, name, price, image_url});
  //   // this.toggleEdit();
  // }
  
  // // toggleEdit() {
  // //   if(this.state.toggle === !this.state.toggle)
  // // }
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps, this.props.editItem)
  //   if(this.props.editItem.product_id !== prevProps.items.product_id) {
  //     const { product_id, name, price, image_url } = this.props.editItem;
  //     this.initializeEdit({product_id, name, price, image_url});
  //   }
  // }

  addItem(name, price, image_url) {
    axios.post('/api/item', {name, price, image_url}).then(res => {
      this.clearInputs();
      this.props.getPosts(res.data);
    }).catch(err => console.log(err));
  }

  editItem(product_id, name, price, image_url) {
    console.log(this.props.editItem, product_id, name), 
    axios.put(`api/item/${product_id}`, {name, price, image_url}).then(res => {
      this.props.getPosts(res.data);
      this.clearInputs();
    }).catch(err => console.log(err));
  }

  render() {
    const { name, price, image_url } = this.state;
    return <div className="form-container">
      <h3>Image URL: </h3>
      <input 
        placeholder="Image URL" 
        type="text" 
        onChange={this.handleImgInput} 
        value={this.state.image_url} />
      <h3>Product Name: </h3>
      <input 
        placeholder="Name" 
        type="text" 
        onChange={this.handleNameInput} 
        value={this.state.name} />
      <h3>Price: </h3>
      <input 
        placeholder="Price" 
        type="Number" 
        onChange={this.handlePriceInput} 
        value={this.state.price} />
      <button 
        onClick={() => this.clearInputs()}>Cancel</button>
      <button 
        onClick={() => {this.addItem(name, price, image_url); this.clearInputs()}}>Add To Inventory</button>
      <button 
        onClick={() => {this.initializeEdit(); this.editItem(this.props.editItem.product_id, name, price, image_url)}}>Edit</button>
      </div>;
  }
}