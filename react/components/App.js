import React, { Component } from 'react';
import Button from "./Button";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "bob"
    }
    this.changeName = this.changeName.bind(this);
  }
  
  changeName (){
    console.log(this.state)
    if (this.state.name == "bob") {
      this.setState({name: "joe"});
    }
    else{
      this.setState({name: "bob"});
    }
  }

  render() {
    return(
    <div>
      <p>{this.state.name} </p>
      <Button click={this.changeName}/>
    </div>
    )
  }
}
