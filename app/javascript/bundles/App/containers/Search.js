import React from 'react'
import * as ProductsAPI from '../ProductsAPI'
import { Link } from 'react-router-dom'
import Product from '../components/Product'

class Search extends React.Component {
  state = {resultProducts: undefined}

  seachProduct = (e) => {
    const query = e.target.value
    if(!query.length > 1) return;
    ProductsAPI.search(query, 10).then(products => {
      let resultProducts = undefined;

      if (products && !products.error) {
        resultProducts = this.prepareProducts(products)
      }
      this.setState({resultProducts})
    })
  }

  prepareProducts = (products) => {
    let preparedProducts = {};
    products.forEach(product => {
      const shelfProduct = this.props.shelfProducts[product.id]
      if(shelfProduct) {
        product.shelf = shelfProduct.shelf
      }
      preparedProducts[product.id] = product
    })
    return preparedProducts
  }

  handleChangeShelf = (productID, newShelf) => {
    ProductsAPI.update(productID, newShelf).then(r => {
      if(newShelf !== 'none' && !r[newShelf].includes(productID)) return;

      let resultProducts = {...this.state.resultProducts}
      const product = resultProducts[productID]
      product.shelf = newShelf
      this.props.addProduct(product)
      this.setState({ resultProducts })
    })
  }

  render() {
    const products = this.state.resultProducts;
    return (
      <div className="search-products">
        <div className="search-products-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-products-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.seachProduct} />
          </div>
        </div>
        <div className="search-products-results">
          <ol className="products-grid">
            {products && Object.values(products).map((product, i) => <li key={i} ><Product onChangeShlef={this.handleChangeShelf} {...product} /></li>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
