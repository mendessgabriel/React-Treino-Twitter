import React, { Component, Fragment } from "react"
import eye from "../../images/eye.png"
import '../cabecalho/cabecalho.css'
import './navMenu.css'

class NavMenu extends Component {
    render() {
        return (
            <Fragment>
                <header className="cabecalho">
                    <div className="cabecalho__container	container">
                        <h1 className="cabecalho__logo">
                            <a href="/">{this.props.appName}</a>
                        </h1>
                        <img src={eye} alt="Eye" className="cabecalho__logoPrincipal" ></img>
                        <nav className="navMenu">
                            <ul className="navMenu__lista">
                                <li className="navMenu__item">
                                    <a className="navMenu__link" href="/">
                                        Salve:	<br />
                                        <strong>{this.props.usuario}</strong><br />
                                    </a>
                                </li>
                                <li className="navMenu__item">
                                    <a className="navMenu__link" href="/">Página Inicial</a>
                                </li>
                                <li className="navMenu__item">
                                    <a className="navMenu__link" href="/hashtags">Hashtags</a>
                                </li>
                                <li className="navMenu__item">
                                    <a className="navMenu__link" href="/logout">Logout</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default NavMenu