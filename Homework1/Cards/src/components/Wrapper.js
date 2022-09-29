import React, { Component } from "react";
import CardsList from "./CardsList";
export default class Wrapper extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let res = await data.json();
    this.setState({ data: res.categories });
  }

  render() {
    return ( this.state.data &&
      <div className="wrapper">
        <CardsList data={this.state.data}></CardsList>
      </div>
    );
  }
}
