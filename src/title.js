'use strict'

import React from 'react'

class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Olá {this.props.name}!</h1>
    }
}

export default Title

