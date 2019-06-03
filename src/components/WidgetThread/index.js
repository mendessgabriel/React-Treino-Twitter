import React, { Component } from 'react'
import './widgetThread.css'

class WidgetThread extends Component {
    render() {
        return (
            <div className={`widget${this.props.tweets == 0? "__oculta": "__visible"}`}>
                <div >
                { this.props.children }
                </div>
            </div>
        )
    }
}

export default WidgetThread