import React from 'react'
import * as ProductsAPI from './ProductsAPI'
import { Route } from 'react-router-dom'
import Search from './containers/Search'
import ProductList from './containers/ProductList'

const normalizeProducts = (products) => {
  let normalizedProducts = {};
  products.forEach(product => normalizedProducts[product.id] = product)
  return normalizedProducts
}

class ProductsApp extends React.Component {
  state = {products: undefined}

  componentDidMount() {
    ProductsAPI.getAll().then(products => {
      this.setState({ products: normalizeProducts(products) })
    })
  }

  addProduct = product => {
    const products = {...this.state.products}
    products[product.id] = product
    this.setState({ products })
  }

  changeShelf = (productID, newShelf) => {
    ProductsAPI.update(productID, newShelf).then(r => {
      if(newShelf !== 'none' && !r[newShelf].includes(productID)) return;
      let products = {...this.state.products}
      products[productID].shelf = newShelf
      this.setState({ products })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          <ProductList changeShelf={this.changeShelf} products={this.state.products} />
        } />
        <Route path="/search" render={() =>
          <Search addProduct={this.addProduct} shelfProducts={this.state.products}/>
        } />
      </div>
    )
  }
}

export default ProductsApp
