import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.editItem = this.editItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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
  
  handleToggle() {
    this.setState({toggle: !this.state.toggle});
  }
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps, this.props.editItem)
  //   if(this.props.editItem.product_id !== prevProps.items.product_id) {
  //     const { product_id, name, price, image_url } = this.props.editItem;
  //     this.initializeEdit({product_id, name, price, image_url});
  //   }
  // }

  componentDidMount() {
    this.findItem();
  }

  findItem(product_id, name, price, image_url) {
    if(this.state.toggle === true) {
      axios.get(`api/item/${product_id}`, { name, price, image_url }).then(res => {
        const { name, price, image_url } = res.data
        this.setState({name, price, image_url});
      }).catch(err => console.log(err));
    } 
  }

  addItem(name, price, image_url) {
    axios.post('/api/item', {name, price, image_url}).then(res => {
      this.clearInputs();
      this.props.getPosts(res.data);
    }).catch(err => console.log(err));
  }

  editItem(product_id, name, price, image_url) {
    // console.log(this.props.editItem, product_id, name), 
    axios.put(`api/item/${product_id}`, {name, price, image_url}).then(res => {
      this.props.getPosts(res.data);
      this.clearInputs();
    }).catch(err => console.log(err));
  }

  render() {
    const { name, price, image_url } = this.state;
    return (
      <div className="form-container">
        <div className="image-holder"></div>
        <h3 className="form-title">Image URL: </h3>
        <input 
          placeholder="Image URL" 
          type="text" 
          onChange={this.handleImgInput} 
          value={this.state.image_url}
          className="form-input" />
        <h3 className="form-title">Product Name: </h3>
        <input 
          placeholder="Name" 
          type="text" 
          onChange={this.handleNameInput} 
          value={this.state.name}
          className="form-input" />
        <h3 className="form-title">Price: </h3>
        <input 
          placeholder="Price" 
          type="Number" 
          onChange={this.handlePriceInput} 
          value={this.state.price}
          className="form-input" />
        <div className="form-btn-cont">
          <button
            className="form-btn" 
            onClick={() => this.clearInputs()}>Cancel</button>
          <button
            className="form-btn" 
            onClick={() => {this.addItem(name, price, image_url); this.clearInputs()}}>Add To Inventory</button>
          <button
            className="form-btn" 
            onClick={() => {this.editItem(this.props.editItem.product_id, name, price, image_url)}}>Save Changes</button>
        </div>
      </div>
    );
  }
}