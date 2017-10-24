// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { Money } from "react-format";
import { ProductType } from "../types";

type Props = {
  onChangeProductQuantity: () => void,
  onRemoveProduct: () => void,
  products: { [integer]: ProductType },
  recomentation: { [number]: Array<number> },
};

class Cart extends Component {
  getTotals = () =>
    Object.values(this.props.products).reduce(
      (prices, product) => {
        const price = product.price * product.quantity;
        prices[product.id] = price;
        prices.fullPrice += price;
        prices.totalQuantity += product.quantity;
        return prices;
      },
      { fullPrice: 0, totalQuantity: 0 }
    );

  render() {
    const products = Object.values(this.props.products);
    if (!products.length)
      return <strong className="empty-cart">Empty cart ;(</strong>;

    const totals = this.getTotals();
    const { fullPrice, totalQuantity } = totals;
    return (
      <div>
        <ol className="products-grid">
          {products.map((product, i) => (
            <li key={i}>
              <CartItem
                onChangeProductQuantity={this.props.onChangeProductQuantity}
                onRemoveProduct={this.props.onRemoveProduct}
                product={product}
                totalPrice={totals[product.id]}
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
