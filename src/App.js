import React, { Component } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        {routes}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
