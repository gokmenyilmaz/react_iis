import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link, NavLink
} from "react-router-dom";

import Home from './Pages/Home'
import Personel from './Pages/Personel'
import Adres from './Pages/Adres'
import MyForm from './Pages/Myform';


export default class App extends Component {
  render() {
    return (
      <Router basename="/modul1">
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

          <li>
            <Link to="/form">Form</Link>
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

          <Route path="/form">
            <MyForm />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}
