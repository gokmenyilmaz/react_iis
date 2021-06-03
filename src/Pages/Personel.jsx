import React, { Component } from "react";
import Adres from "./Adres";

import store from "../store";

export default class Personel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  componentDidMount() {
    console.log("componentdid");
    console.log("store kaydı personel", store.getState());
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    return (
      <div>
        <h1>Personel</h1>
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
        </div>

        <Adres />
      </div>
    );
  }
}
