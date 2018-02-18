import React from 'react'
import PropTypes from 'prop-types'
import style from '../css/style.crp.css'

export const Actions = ({getRepos, getStarred}) => {
  return (
    <div className={style.actions}>
      <button onClick={getRepos}>Ver repositórios</button>
      <button onClick={getStarred}>Ver favoritos</button>
    </div>
  )
}

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}