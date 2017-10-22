import React from 'react'
import Product from './Product'

export default ({ title, products, onChangeShlef }) =>
  <div className="productshelf">
    <h2 className="productshelf-title">
      {title}
    </h2>
    <div className="productshelf-products">
      <ol className="products-grid">
        {products.map((product, i) =><li key={i} ><Product onChangeShlef={onChangeShlef} {...product} /></li>)}
      </ol>
    </div>
  </div>
