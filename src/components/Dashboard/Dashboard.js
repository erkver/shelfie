import React,{ Component } from "react";
import Product from "../Product/Product";
import './Dashboard.css'
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.newItem = this.newItem.bind(this);
  }

  newItem(list) {
    this.setState({ items: list })
  }

  componentDidMount() {
    axios.get('/api/items').then(res => {
      console.log(res);
      this.setState({ items: res.data });
    }).catch(err => console.log(err));
  }

  deleteItem = (product_id) => {
    axios.delete(`/api/item/${product_id}`).then(res => {
      this.setState(res.data);
    })
  }

  render(){
    const { items } = this.state;
    let itemList = items.map((item, i) => (
      <div className="dashboard-item" key={i}>
      <Product 
      item={item} 
      deleteItem={this.deleteItem}
      selectItem={this.selectedItem}
      />
      </div>
    ))
    return(
      <div className="dashboard-container">
        {itemList}
      </div>
    )
  }
}