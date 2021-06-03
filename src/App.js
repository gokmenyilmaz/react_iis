import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link, NavLink
} from "react-router-dom";

import Home from './home'
import Personel from './personel'
import Adres from './adres'



export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personel">Personel</Link>
          </li>
          <li>
            <Link to="/adres">Adres</Link>
          </li>
        </ul>

        <hr />

  
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/personel">
            <Personel />
          </Route>
          <Route path="/adres">
            <Adres />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}
