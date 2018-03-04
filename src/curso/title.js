import React, { Component } from 'react'

// export const Title = ({name, lastname}) => <h1>Olá {`${name} ${lastname}!`}</h1>;

export class Title extends Component {
  constructor (props) {
    super(props)
    this.state = Object.assign(
      {
        name: 'Desconhecido',
        lastname: 'Sem sobrenome'
      },
      props
    )
  }

  render () {
    return <h1>Olá {`${this.state.name} ${this.state.lastname}!`}</h1>
  }
}
