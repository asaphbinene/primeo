import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 8
    }

  }

  isEven(val) {
    return val % 2 === 0 ? "Even" : "Odd";
  }

  getClassName(val) {
      return val % 2 === 0
        ? "bg-primary text-white text-center p-2 m-1"
        : "bg-danger text-white text-center p-2 m-1"
  }

  handleClick = () => this.setState({count: this.state.count + 1});

  render = () => 
    <h4 className={this.getClassName(this.state.count)}>
      <button className="btn btn-info m-2" onClick={ this.handleClick }>
          Click Me
      </button>
      Number of things is { this.isEven(this.state.count) } number

    </h4>

}
