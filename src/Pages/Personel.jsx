import React, { Component } from "react";
import Adres from "./Adres";

import store from "../store";

// id: 1,
// description: "Bug1",
// resolved: false

export default class Personel extends Component {

  un_subscribe={}

  constructor(props) {
    super(props);

    this.state = {
      BugList: store.getState(),
    };

  }

  componentDidMount() {
    console.log("componentdid-pers");
    console.log("store kaydı personel", store.getState());

    var x=this;

    this.un_subscribe=store.subscribe(() => {
      x.setState({
        BugList:store.getState()
      })
    });

  }

  componentWillUnmount() {
    this.un_subscribe();
  }

  render() {
    let liste = this.state.BugList;

    const listItems = liste.map((c) => <li key={c.id}>
      {c.id}
      {c.description}
      {c.resolved}
      
      </li>);

    return (
      <div>
        <h1>Personel</h1>
        <h1>{listItems}</h1>
        <Adres />
      </div>
    );
  }
}
