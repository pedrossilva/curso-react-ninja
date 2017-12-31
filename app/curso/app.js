import React, {Component} from "react"
import Square from "./square";
import {Button} from "./button";

export class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'green'
    }
  }

  render() {
    return (
      <div>
        <Square color={this.state.color}/>

        {['red', 'green', 'blue'].map(
          (color, i) => (
            <Button key={i} handleClick={() => this.setState({color})}>
              {color}
            </Button>
          )
        )}
      </div>
    )
  }

}