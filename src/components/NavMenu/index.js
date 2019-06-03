import React, { Component, Fragment } from 'react'
import eye from "../../images/eye.png"
import './navMenu.css'

class NavMenu extends Component {
    render() {
        return (
            <Fragment>
                <img src={eye} alt="Eye" className="cabecalho__logoPrincipal" ></img>
                <nav className="navMenu">
                    <ul className="navMenu__lista">
                        <li className="navMenu__item">
                            <a className="navMenu__link" href="/">
                                Salve: <br />
                                <strong>{this.props.usuario}</strong>
                            </a>
                        </li>
                        <li className="navMenu__item">
                            <a className="navMenu__link" href="/">Página Inicial</a>
                        </li>
                        <li className="navMenu__item">
                            <a className="navMenu__link" href="/">Hashtags</a>
                        </li>
                        <li className="navMenu__item">
                            <a className="navMenu__link" href="/">Logout</a>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default NavMenu