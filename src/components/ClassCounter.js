import React, { Component } from "react";
import "../css/ClassCounter.css";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () =>
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });

  render() {
    return (
      <>
        <div className="class-counter-card">
          <div className="class-counter-heading">Class Component</div>
          <div className="class-counter-value">{this.state.count}</div>
          <div className="class-counter-buttons">
            <button className="class-counter-button" onClick={this.increment}>
              +
            </button>
            <button className="class-counter-button" onClick={this.decrement}>
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default ClassCounter;
