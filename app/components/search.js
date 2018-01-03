import React from 'react'
import PropTypes from 'prop-types'

export const Search = ({handleSearch}) => {
  return (
    <div className="search">
      <input type="search"
             placeholder="Digite o nome do usuário do Github"
             onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}