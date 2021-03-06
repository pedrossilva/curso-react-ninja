import React from 'react'
import PropTypes from 'prop-types'

import {Logo} from 'components/logo'
import style from 'css/style.crp.css'
import { Search } from 'src/components/search'
import { UserInfo } from 'src/components/user-info'
import { Actions } from 'src/components/actions'
import { Repos } from 'src/components/repos'

export const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => {
  return (
    <div className={style.app}>
      <Logo />

      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {isFetching && <div>Carregando ...</div>}
      {!!userinfo && <UserInfo userinfo={userinfo} />}
      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios: '
        repos={repos}
      />}

      {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos: '
        repos={starred}
      />}

    </div>
  )
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}
