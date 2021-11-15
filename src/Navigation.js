import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="links">
              <Link className="h" to="/" >Home</Link>
             <Link className="d" to="/dsu" >Daily Status Update</Link>
             <Link className="r" to="/requests">Requests</Link>
             <Link className="t" to="/tasks">Tasks</Link>
             <Link className="l" to="/leaves">Leaves</Link>
             
     
            </div>
        )
    }
}