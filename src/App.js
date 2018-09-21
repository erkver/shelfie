import React, { Component } from 'react';
import axios from "axios";
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { BrowserRouter, Link } from "react-router-dom";
import routes from "./routes";


import './App.css';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   items: [],
    //   editItem: {}
    // }
    // this.newItem = this.newItem.bind(this);
    // this.selectedItem = this.selectedItem.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/api/items').then(res => {
  //     console.log(res);
  //     this.setState({items: res.data});
  //   }).catch(err => console.log(err));
  // }

  // newItem(list) {
  //   this.setState({items: list})
  // }

  // selectedItem(product_id, name, price, image_url) {
  //   let select = {product_id, name, price, image_url}
  //   this.setState({editItem: select});
  //   console.log(this.state.editItem)
  // }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Link to="/" >
        <Dashboard
          // items={this.state.items}
          // getList={this.newItem}
          // selectItem={this.selectedItem}
        />
        </Link>
        <Link to='/add'  >
        <Form 
          // getPosts={this.newItem}
          // items={this.state.items}
          // editItem={this.state.editItem}
        />
        </Link>
        {routes}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
