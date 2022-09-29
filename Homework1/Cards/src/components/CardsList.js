import React, { Component } from "react";
import Card from "./Card";
export default class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: false,
    };
    props.data.forEach((el) => {
      this.state[el.idCategory] = {};
      this.state[el.idCategory].isShown = true;
      this.state[el.idCategory].unmountCount = 0;
    });
  }
  handleClose = (id) => {
    this.setState({
      [id]: { isShown: false, unmountCount: this.state[id].unmountCount + 1 },
    });
  };

  handleShow = (id) => {
    this.setState({
      [id]: { ...this.state[id], isShown: true },
    });
  };
  handleReport = () => {
    this.setState({
      report: !this.state.report,
    });
  };

  render() {
    return (
      <>
      <div className="container">
        {this.props.data.map((el) => {
          return this.state[el.idCategory].isShown ? (
            <Card
              key={el.idCategory}
              id={el.idCategory}
              category={el.strCategory}
              handleClose={this.handleClose}
              handleUnmount={this.handleUnmount}
            ></Card>
          ) : (
            <div key={el.idCategory} className="card">
              <button onClick={() => this.handleShow(el.idCategory)}>
                Show
              </button>
            </div>
          );
        })}
        <button onClick={this.handleReport} id="reportBtn">
          {!this.state.report ? 'Report' : 'Hide'}
        </button>
        </div>
        <div className="report">
          {this.state.report
            ? this.props.data.map((el) => {
                return (
                  <span key={el.idCategory}>
                    Id: {el.idCategory} count:{" "}
                    {this.state[el.idCategory].unmountCount}
                  </span>
                );
              })
            : ""}
        </div>
        </>
    );
  }
}
