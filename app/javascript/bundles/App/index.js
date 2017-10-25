// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductType } from './types';

type Props = {
  products: Array<ProductType>,
  cart: Array<number>,
  recomentation?: { [number]: Array<number> },
};

class Index extends Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <App {...this.props} />
      </BrowserRouter>
    );
  }
}

export default Index;
