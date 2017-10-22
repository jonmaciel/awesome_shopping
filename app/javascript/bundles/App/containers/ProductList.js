import React from 'react'
import { Link } from 'react-router-dom'
import ProductShelf from '../components/ProductShelf'
import * as ProductsAPI from '../ProductsAPI'

const shelfTitle = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read',
}

class ProductList extends React.Component {
  productsByShelf = (products) =>
   Object.keys(shelfTitle).reduce((productsByShelf, shelf) => {
       productsByShelf[shelf] = products.filter(product => product.shelf === shelf)
       return productsByShelf;
    }, {});


  renderProductList() {
    if(!this.props.products) return(<span>Loading...</span>);
    const productsByShelf = this.productsByShelf(Object.values(this.props.products))
    return(
      <div>
        {Object.keys(productsByShelf).map((shelf, i) =>
          <ProductShelf key={i} onChangeShlef={this.props.changeShelf} title={shelfTitle[shelf]} products={productsByShelf[shelf]} />
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="list-products">
        <div className="list-products-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-products-content">
          {this.renderProductList()}
        </div>
        <div className="open-search">
          <Link to="/search">Add a product</Link>
        </div>
      </div>
    )
  }
}
export default ProductList
