// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductType } from "./types";

type Props = {
  products: Array<ProductType>,
  recomentation: { [number]: Array<number> },
};

class Index extends Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <App
          products={this.props.products}
          recomentation={this.props.products}
        />
      </BrowserRouter>
    );
  }
}

export default Index;
