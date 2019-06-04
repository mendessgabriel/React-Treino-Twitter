import React, { Component, Fragment } from 'react'
import './widgetThread.css'

class WidgetThread extends Component {
    render() {
        return (
            <Fragment>
                <div className={`widget${this.props.tweets == 0 ? "__oculta" : "__visible"}`}>
                    <div >
                        {this.props.children}
                    </div>
                </div>
                <div className={`widget${this.props.tweets == 0 ? "__visible" : "__oculta"}`}>
                    <div id="outOfTweet">
                        Hmm... Nada por aqui. Digite um tweet!
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default WidgetThread