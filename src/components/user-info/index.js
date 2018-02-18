import React from 'react'
import PropTypes from 'prop-types'
import style from '../css/style.crp.css'

export const UserInfo = ({userinfo}) => {
  return (
    <div className={style["user-info"]}>
      <img src={userinfo.photo} />

      <h1 className="username">
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h1>

      <div className={style["repos-info"]}>
        <ul>
          <li>Repositórios: {userinfo.repos}</li>
          <li>Seguidores: {userinfo.followers}</li>
          <li>Seguindo: {userinfo.following}</li>
        </ul>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}