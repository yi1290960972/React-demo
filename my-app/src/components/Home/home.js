import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <div className="App">
                <Link to="/weather" style={{textDecoration:'none'}}>
                    <button className="btn">Start App</button>
                </Link>
            </div>
        )
    }
}
