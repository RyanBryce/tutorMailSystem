import React, { Component } from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button onClick={this.props.click}>click me</button>
    );
  }
}

export default Button;