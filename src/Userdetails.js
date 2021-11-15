import React, { Component } from 'react'
import Dash from './Dash.js'
import Dsu from './Dsu.js'
import Requests from './Requests.js'
import Tasks from './Tasks.js'
import Leaves from './Leaves.js'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navigation from './Navigation';
import Details from './Details.js'

export default class Userdetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            response:this.props.user
        }
    }
    
    render() {
        return (
            <div>
 
<BrowserRouter>
<Navigation/>
<Switch>
      <Route exact path="/" component={()=><Details data={this.props.user}/>}/>
    <Route  path="/tasks" component={Tasks}/>
    <Route path="/leaves" component={Leaves}/>
    <Route path="/requests" component={Requests}/>
    <Route path="/dsu" component={Dsu}/>
  </Switch>
      </BrowserRouter> 

            </div>
        )
    }
}
