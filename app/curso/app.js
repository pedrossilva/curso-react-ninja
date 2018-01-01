import React, {Component} from "react"
import Square from "./square";
import {Button} from "./button";
import {Timer} from "./timer";

export class App extends Component {
  constructor() {
    super()
    console.log('constructor')
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        <Timer timer={this.state.time}/>
        <button onClick={() => this.setState({time: this.state.time+10})}>
          Change props
        </button>
      </div>
    )
    // return (
    //   <div>
    //     <Square color={this.state.color}/>
    //
    //     {['red', 'green', 'blue'].map(
    //       (color, i) => (
    //         <Button key={i} handleClick={() => this.setState({color})}>
    //           {color}
    //         </Button>
    //       )
    //     )}
    //   </div>
    // )
  }

}