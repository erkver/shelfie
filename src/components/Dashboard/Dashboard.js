import React,{ Component } from "react";
import Product from "../Product/Product";
import './Dashboard.css'
import { connect } from "react-redux";
import { getItems, deleteItem, getOne } from "../../ducks/reducer";
// import axios from "axios";

class Dashboard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     items: []
  //   }
  // }
  
  
  componentDidMount() {
    this.props.getItems();
    // axios.get('/api/items').then(res => {
    //   this.setState({items: res.data});
    // }).catch(err => console.log(err));
  }

  render(){
    const { items, deleteItem, getOne } = this.props;
    // const { items } = this.state;
    // console.log(this.props);
    let itemList = items.map((item, i) => (
      <div className="dashboard-item" key={i}>
      <Product 
      item={item} 
      deleteItem={deleteItem}
      getOne={getOne}
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

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getItems, deleteItem, getOne})(Dashboard);