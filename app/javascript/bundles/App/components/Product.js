import React from "react";
import { Money } from "react-format";

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
          backgroundImage: `url("${img_url}")`,
        }}
      />
      {isInCartList ? (
        <a
          className="product-remove"
          href="#remove-product"
          onClick={e => {
            e.preventDefault();
            onRemoveProduct(id);
          }}
        />
      ) : (
        <a
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
      <Money locale="en-US" currency="USD">
        {price}
      </Money>
    </div>
  </div>
);
