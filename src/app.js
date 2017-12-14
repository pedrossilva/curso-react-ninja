import * as React from 'react'
import Title from './title'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div data-id={1}>
                <Title name={'Pedro Silva'} />
            </div>
        )
    }
}

export default App