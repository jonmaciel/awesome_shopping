import React from 'react';
import { Money } from 'react-format';

export default ({
  id,
  price,
  name,
  img_url,
  onAddProduct,
  onRemoveProduct,
  isInCartList,
}) => (
  <div className="product">
    <div className="product-top">
      <div
        className="product-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: img_url ? `url("${img_url}")` : '',
        }}
      />
      {isInCartList ? (
        <a
          title={name}
          tabIndex="1"
          className="product-remove"
          href="#remove-product"
          onClick={e => {
            e.preventDefault();
            onRemoveProduct(id);
          }}
        />
      ) : (
        <a
          title={name}
          className="product-add"
          href="#add-product"
          onClick={e => {
            e.preventDefault();
            onAddProduct(id);
          }}
        />
      )}
    </div>
    <div className="product-title">{name}</div>
    <div className="product-price">
      Price:
      <div className="product-price">
        <Money locale="en-US" currency="USD">
          {price}
        </Money>
      </div>
    </div>
  </div>
);
