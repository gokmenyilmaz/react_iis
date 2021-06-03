import React, { Component } from "react";
import Adres from "./Adres";

import store from "../store";

// id: 1,
// description: "Bug1",
// resolved: false

export default class Personel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BugList: [
        {
          id: 1,
          description: "Bug1",
          resolved: false,
        },
        {
          id: 2,
          description: "Bug2",
          resolved: true,
        },
      ],
    };

    store.subscribe(() => {
      console.log("store değişti", store.getState());
    });
  }

  componentDidMount() {
    console.log("componentdid");
    console.log("store kaydı personel", store.getState());
  }

  componentWillUnmount() {
    console.log("unmount");
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
