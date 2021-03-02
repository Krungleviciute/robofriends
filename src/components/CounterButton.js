import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("nextProp", nextProp);
    console.log("nextState", nextState);
    if (this.state.count !== nextState.count) {
      return true;
    } else {
      return false;
    }
  }

  updateCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    console.log("CounterButton");
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
