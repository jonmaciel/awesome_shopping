// @flow
import React, { Component } from "react";
import Product from "../components/Product";
import { ProductType } from "../types";

type Props = {
  handleCartOpen: () => void,
  onChangeProductQuantity: () => void,
  onRemoveProduct: () => void,
  products?: Array<ProductType>,
};

class ProductList extends Component {
  renderProductList() {
    const { products, cart, onAddProduct, onRemoveProduct } = this.props;
    if (!this.props.products) return <span>No product found...</span>;

    return (
      <ol className="products-grid">
        {Object.values(products).map((product, i) => (
          <li key={i}>
            <Product
              {...product}
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
              isInCartList={!!cart[product.id]}
            />
          </li>
        ))}
      </ol>
    );
  }

  render() {
    return (
      <div className="list-products-content">
        <div className="productshelf">
          <h2 className="productshelf-title">Products</h2>
          <div className="productshelf-products">
            {this.renderProductList()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
