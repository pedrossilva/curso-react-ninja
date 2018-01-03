import React, {Component} from 'react'
import './app.css'
import {AppContent} from "./components/app-content";
import ajax from "@fdaciuk/ajax/dist/ajax.min";

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userinfo: null,
      repos: [],
      starreds: []
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13;
    if(keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              photo: result.avatar_url //'https://avatars3.githubusercontent.com/u/4964454?v=4'
            }
          })
        })
    }
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starreds={this.state.starreds}
        handleSearch={e => this.handleSearch(e)}
      />
    )
  }
}