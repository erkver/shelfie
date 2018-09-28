import React, { Component } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";



import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Header />
          </header>
          {routes}
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
