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

    <table className="table table-striped table-bordered table-sm">
      <thead className="bg-info text-white">
        <tr>
          <th>Value</th>
          <th>Even?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ this.state.count }</td>
          <td>{ this.isEven(this.state.count) }</td>

        </tr>

      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan="2">
            <button className="btn btn-info m-2"
                  onClick={ this.handleClick }>
                    Click Me
            </button>

          </td>
        </tr>
      </tfoot>
    </table>
}
