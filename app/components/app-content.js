import React from 'react'

import {Search} from "./search";
import {UserInfo} from "./user-info";
import {Actions} from "./actions";
import {Repos} from "./repos";
import PropTypes from "prop-types";

export const AppContent = ({userinfo, repos, starreds, handleSearch}) => {
  return (
    <div className="app">
      <Search handleSearch={handleSearch}/>
      {!!userinfo && <UserInfo userinfo={userinfo}/>}
      {!!userinfo && <Actions/>}

      {!!repos.length &&
      <Repos
        className="repos"
        title="Repositórios: "
        repos={repos}
      />}

      {!!starreds.length &&
      <Repos
        className="starred"
        title="Favoritos: "
        repos={starreds}
      />}

    </div>
  )
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starreds: PropTypes.array.isRequired
}