import React, {Component} from 'react'
// import './src.css'
import {AppContent} from "./components/app-content";
import ajax from "@fdaciuk/ajax/dist/ajax.min";

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13;

    if(keyCode === ENTER) {
      this.setState({isFetching: true})
      ajax().get(this.getGitHubApiUrl(value))
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              photo: result.avatar_url
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({isFetching: false}))
    }
  }

  getRepos(type = 'repos') {
    const userinfo = this.state.userinfo
    return e => {
      ajax().get(this.getGitHubApiUrl(userinfo.login, type))
        .then(result => {
          this.setState({
            [type]: result.map(repo => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos()}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}