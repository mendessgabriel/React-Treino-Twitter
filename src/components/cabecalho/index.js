import React, { Component } from 'react'
import eye from "../../images/eye.png"
import './cabecalho.css'
import './navMenu.css'

class Cabecalho extends Component {
    render() {
        return (
            <body>
                <header className="cabecalho">
                    <div className="cabecalho__container	container">
                        <h1 className="cabecalho__logo">
                            <a href="/">Twitter</a>
                        </h1>
                        <img src={eye} alt="Eye" height="80" width="80"></img>
                        <nav className="navMenu">
                            <ul className="navMenu__lista">
                                <li className="navMenu__item">
                                    <a className="navMenu__link" href="/">
                                        Bem	vindo(a):	<br />
                                        <strong>{this.props.usuario}</strong>
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
            </body>
        )
    }
}

export default Cabecalho