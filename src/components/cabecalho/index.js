import React, { Component } from 'react'
import './cabecalho.css'
// import './navMenu.css'

class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        { this.props.nomeApp === "ttertwi" ? <a href="/">{this.props.nomeApp}</a> : <p>Err0</p>}
                    </h1>
                    { this.props.children }
                </div>
            </header>
        )
    }
}

export default Cabecalho