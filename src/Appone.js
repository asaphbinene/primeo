import React, { Component } from 'react';
import './App.css';

const message = "Asaph Binene Constant Note";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 4
    }

  }

  isEven(val) {
    // return this.state.count % 2 === 0 ? "Even" : "Odd";
    return val % 2 === 0 ? "Even" : "Odd";
  }

  render = () => 
    <h4 class="bg-primary text-white text-center p-2 m-1">
      // Number of things is { this.isEven() } number
      <br />Number of things is { this.isEven(this.state.count) } number

    </h4>

}
