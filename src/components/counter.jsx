import React, { Component } from "react";

import PeopleAPI from "./peopleAPI";

class Counter extends Component {
  state = { value: this.props.value };

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  formatCount = () => {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {/* {this.props.children} */}
        {/* <h3>Counter Component : People Data Automatically loaded</h3> */}
        {/* <PeopleAPI /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.increment} className="btn btn-primary btn-sm">
          Increment : {this.state.value}
        </button>
      </div>
    );
  }
}

export default Counter;
