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
    return val % 2 === 0 ? "Yes it is an Even number" : "No it is an Odd number";
  }

  getClassName(val) {
      return val % 2 === 0
        ? "row bg-light text-center p-2"
        : "row bg-danger text-center p-2"
  }

  handleClick = () => this.setState({count: this.state.count + 1});

  render = () => 

    <div className="container-fluid p-4">
      <div className="row bg-info text-white p-2">
        <div className="col font-weight-bold">Value</div>
        <div className="col-6 font-weight-bold">Even?</div>
      </div>
      <div className={this.getClassName(this.state.count)}>
        <div className="col">{ this.state.count }</div>
        <div className="col-6">{ this.isEven(this.state.count) }</div>
      </div>
      <div>
        <div>
          <button className="btn btn-info m-2"
                onClick={ this.handleClick }>
                  Click Me
          </button>
        </div>
      </div>
    </div>
}
