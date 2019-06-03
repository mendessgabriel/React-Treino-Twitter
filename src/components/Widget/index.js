import React, { Component } from 'react'
import './widget.css'

class Widget extends Component {
    constructor(props){
        super(props)
        this.state = {
            tweets: ''
        }
    }
    render() {
        return (
            <div className="widget">
                <div className={`visibility${this.props.tweets == 0? "__oculta": "__visible"}`}>
                { this.props.children }
                </div>
            </div>
        )
    }
}

export default Widget