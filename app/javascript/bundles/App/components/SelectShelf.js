import React from 'react'

export default ({productId, selectedsShelf, onChangeShlef}) =>
  <div className="product-shelf-changer">
    <select value={selectedsShelf} onChange={e => { onChangeShlef(productId, e.target.value) }}>
      <option value="" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
