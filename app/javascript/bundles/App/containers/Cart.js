// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { Money } from 'react-format';
import { ProductType } from '../types';

type Props = {
  onChangeProductQuantity: () => void,
  onRemoveProduct: () => void,
  products: { [integer]: ProductType },
  recomentation: { [number]: Array<number> },
};

class Cart extends Component {
  getTotals = cartItems => {
    const { products, cart } = this.props;
    return cartItems.reduce(
      (totals, productId) => {
        const quantity = cart[productId].quantity;
        totals.totalQuantity += quantity;
        totals.fullPrice += products[productId].price * quantity;
        return totals;
      },
      { fullPrice: 0, totalQuantity: 0 }
    );
  };

  render() {
    const { products, cart } = this.props;
    const cartItems = Object.keys(cart);
    const { fullPrice, totalQuantity } = this.getTotals(cartItems);

    if (!cartItems.length)
      return <strong className="empty-cart">Empty cart ;(</strong>;

    return (
      <div>
        <ol className="products-grid">
          {cartItems.map((productId, i) => (
            <li key={i}>
              <CartItem
                onChangeProductQuantity={this.props.onChangeProductQuantity}
                onRemoveProduct={this.props.onRemoveProduct}
                product={products[productId]}
                quantity={cart[productId].quantity}
              />
            </li>
          ))}
        </ol>
        {fullPrice > 0 && (
          <div className="full-price">
            <div>
              <strong>Itens quantity:</strong>
              {totalQuantity}
            </div>
            <div>
              <strong>Total: </strong>
              <Money locale="en-US" currency="USD">
                {fullPrice}
              </Money>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
