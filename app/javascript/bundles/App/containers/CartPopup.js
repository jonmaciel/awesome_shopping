// @flow
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import Cart from './Cart';
import { ProductType } from '../types';

type Props = {
  handleCartOpen: () => void,
  onChangeProductQuantity: () => void,
  onRemoveProduct: () => void,
  cart: { [number]: number },
  products: { [number]: ProductType },
};

class CartPopup extends Component<Props> {
  componentDidMount() {
    this.props.handleCartOpen(true);
  }

  handleClickOutside() {
    this.props.history.push('/');
    this.props.handleCartOpen(false);
  }

  render() {
    return (
      <div className="cart-popup">
        <h2 className="productshelf-title">Cart</h2>
        <Cart
          onChangeProductQuantity={this.props.onChangeProductQuantity}
          onRemoveProduct={this.props.onRemoveProduct}
          products={this.props.products}
          cart={this.props.cart}
        />
      </div>
    );
  }
}

export default onClickOutside(CartPopup);
