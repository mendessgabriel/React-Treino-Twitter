import React, { Component, Fragment } from 'react'
import NavMenu from '../NavMenu/index.js'
import './cabecalho.css'

class Cabecalho extends Component {
    render() {
        console.log(this)
        return (
            <Fragment>
                <NavMenu usuario="@GabrielMendes" appName="Twitter"></NavMenu>
            </Fragment>
        )
    }
}

export class Botao extends Component {
    render() {
        console.log(this)
        return (
            <Fragment>
                <br />
                <button>
                    {this.props.children}
                </button>
            </Fragment>
        )
    }
}

export default Cabecalho