import React, { Component } from 'react';
import logo from './logo2.png';
import './App.css';
import './bootstrap.css';
import List from './list';
import items from './shoes';
import Header from './Header';

class App extends Component {
  state = {
    item: 0,
    price: 0
  }
  addCart = (price) => {
    this.setState({
      item: this.state.item + 1,
      price: this.state.price + price
    })
  }
  render() {
    return (
      <div className="App">
      <Header item = {this.state.item} price = {this.state.price} /> 
        <List add = {this.addCart}/>
      </div>
    );
  }
}

export default App;
