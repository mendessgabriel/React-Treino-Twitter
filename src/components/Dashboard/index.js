import React, { Component } from 'react'
import './dashboard.css'

class Dashboard extends Component {
    constructor(state){
        super(state)
        this.state = {
           
        }
    }
    render() {
        console.log(this.props);
        
        return (
            <div className={`dashboard dashboard__${this.props.posicao}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Dashboard