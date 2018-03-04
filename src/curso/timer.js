import React, { Component } from 'react'

export class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('Should component update', nextProps, nextState)
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', nextProps, nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount timer')
    clearInterval(this.timer)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}
