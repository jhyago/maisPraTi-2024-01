import { Component } from 'react'

class MyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contador: 0
        }
    }

    add = () => {
        this.setState({ contador: this.state.contador + 1 })
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.add}>Incrementar</button>
            </div>
        )
    }
}

export default MyComponent