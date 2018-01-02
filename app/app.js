import React, {Component} from 'react'
import './app.css'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <div className="search">
          <input type="search" placeholder="Digite o nome do usuário do Github"/>
        </div>

        <div className="user-info">
          <img src="https://avatars3.githubusercontent.com/u/4964454?v=4" />
          <h1 className="username">
            <a href="https://github.com/pedrossilva">Pedro Silva</a>
          </h1>
        </div>

        <div className="repos-info">
          <ul>
            <li>Repositórios: 9</li>
            <li>Seguidores: 0</li>
            <li>Seguindo: 4</li>
          </ul>

          <div className="actions">
            <button>Ver repositórios</button>
            <button>Ver favoritos</button>
          </div>

          <ul className="repos">
            <h2>Repositórios:</h2>
            <li><a href="#">Nome do repositório</a></li>
          </ul>

          <ul className="starred">
            <h2>Favoritos:</h2>
            <li><a href="#">Nome do repositório</a></li>
          </ul>
        </div>
      </div>
    )
  }
}