// @flow
import React, { Component } from "react";
import { Route } from "react-router-dom";
import ProductList from "./containers/ProductList";
import CartPopup from "./containers/CartPopup";
import AlertContainer from "react-alert";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ProductType } from "./types";
import { normalizeById } from "./helpers";

type Props = {
  products: Array<ProductType>,
  recomentation: { [number]: Array<number> },
};

class App extends Component<Pros> {
  state = { products: {}, cart: {}, isCartOpen: false };

  alertOptions = {
    offset: 3,
    position: "top right",
    theme: "light",
    time: 3000,
    transition: "scale",
  };

  showAlert = (msg, type) => this.msg.show(msg, { type });

  componentWillMount() {
    this.setState({ products: normalizeById(this.props.products) });
  }

  addProduct = productId => {
    const products = this.state.products;
    const cart = { ...this.state.cart };

    if (Object.keys(cart).includes(productId)) return;
    cart[productId] = { ...products[productId], quantity: 1 };

    this.showAlert("The product has been added to the cart! ;)", "success");

    this.setState({ cart });
  };

  onChangeProductQuantity = (productId, quantity) => {
    const cart = { ...this.state.cart };
    quantity = parseInt(quantity || 0);
    cart[productId] = { ...cart[productId], quantity };

    this.setState({ cart });
  };

  removeProduct = productId => {
    const cart = { ...this.state.cart };

    if (Object.keys(cart).includes(productId)) return;
    delete cart[productId];
    this.showAlert("The product has been removed of the card! ;)", "success");
    this.setState({ cart });
  };

  handleCartOpen = isCartOpen => this.setState({ isCartOpen });

  render() {
    const { cart, isCartOpen } = this.state;
    const cartItensCount = Object.keys(cart).length;

    return (
      <div className="app">
        <div className="list-products">
          <div className="list-products-title">
            <h1>Awesome Shopping</h1>
          </div>
          <div>
            <ProductList
              cart={cart}
              onAddProduct={this.addProduct}
              onRemoveProduct={this.removeProduct}
              products={this.state.products}
            />
            <Route
              path="/cart"
              render={({ history }) => (
                <CartPopup
                  onChangeProductQuantity={this.onChangeProductQuantity}
                  onRemoveProduct={this.removeProduct}
                  products={cart}
                  handleCartOpen={this.handleCartOpen}
                  history={history}
                />
              )}
            />
            <div className="product-cart">
              {!isCartOpen &&
                cartItensCount > 0 && (
                  <div className="product-cart-count">{cartItensCount}</div>
                )}
              <Link
                className={classNames({
                  "ignore-react-onclickoutside": isCartOpen,
                })}
                to="/cart"
              />
            </div>
          </div>
        </div>
        <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
      </div>
    );
  }
}

export default App;
