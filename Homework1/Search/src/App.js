import React, { Component } from "react";
import Countries from "./data/countries.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isShown: Countries.map((el) => el.id),
    };
  }

  handleSearch = (e) => {
    let searched = e.target.value.toLowerCase();
    this.setState({
      isShown: Countries.filter((el) =>
        el.name.toLowerCase().includes(searched)
      ).map((el) => el.id),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inputContainer">
          <input
            onChange={(e) => {
              this.handleSearch(e);
            }}
            type="search"
            className="search"
            placeholder="Search..."
          ></input>
        </div>
        <div className="countriesContainer">
          {Countries.map((el) => {
            return this.state.isShown.includes(el.id) ? (
              <div key={el.id} className="countrie">
                {el.name}
              </div>
            ) : (
              false
            );
          })}
        </div>
      </div>
    );
  }
}
