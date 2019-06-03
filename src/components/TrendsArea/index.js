import React, { Component } from 'react'
import './trendsArea.css'

class TrendsArea extends Component {
    render() {
        return ( 
            <div className="trendsArea">
                <h2 className="trendsArea__titulo widget__titulo">Trends</h2>
                <ol className="trendsArea__lista">
                    <li><a href="/">#Trends1</a></li>
                    <li><a href="/">#Trends2</a></li>
                </ol>
            </div>
        )
    }
}

export default TrendsArea