import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props)
    this.basePath="https://pulse.brninfotech.com/pulse/modules"
        this.state = {
             
        }
    }
    
    render() {

        return (
            <div>
              <div className="details">
               <h1 className="name">{this.props.data.firstName}</h1>
               <h1 className="id">Student ID:{this.props.data.studentID}</h1>
               <h1 className="id2">Batch ID:{this.props.data.batchID}</h1>
               </div>
               <img className="img" src={this.basePath+this.props.data.profileImagePath.slice(2)}/>
              
            </div>
        )
    }
}
