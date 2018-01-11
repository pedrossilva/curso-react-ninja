import React from 'react'

export const Actions = ({getRepos, getStarred}) => {
  return (
    <div className="actions">
      <button onClick={getRepos}>Ver repositórios</button>
      <button onClick={getStarred}>Ver favoritos</button>
    </div>
  )
}