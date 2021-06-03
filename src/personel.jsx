import React, { Component } from "react";

export default class personel extends Component {
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
  }

  componentWillUnmount()
  {
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
      </div>
    );
  }
}
