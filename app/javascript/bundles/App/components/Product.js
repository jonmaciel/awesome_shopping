import React from 'react'
import SelectShelf from './SelectShelf'

export default ({id, authors, title, imageLinks, shelf, onChangeShlef}) =>
  <div className="product">
    <div className="product-top">
      <div
        className="product-cover"
        style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.smallThumbnail}")` }}
      />
      <SelectShelf productId={id} onChangeShlef={onChangeShlef} selectedsShelf={shelf || ''} />
    </div>
    <div className="product-title">{title}</div>
    { Array.isArray(authors) ?
        authors.map((author, i)=> <div key={i} className="product-authors">{author}</div>) :
        <div className="product-authors">{authors}</div>
    }
  </div>



