import React from "react";
import Product from "./Product";
import { Money } from "react-format";

export default ({
  product,
  totalPrice,
  onRemoveProduct,
  onChangeProductQuantity,
}) => (
  <div>
    <Product
      {...product}
      onRemoveProduct={onRemoveProduct}
      isInCartList={true}
    />
    <div className="product-quantity">
      Quantity:
      <input
        min="1"
        onChange={e => onChangeProductQuantity(product.id, e.target.value)}
        onBlur={e => {
          if (e.target.value <= 0) onChangeProductQuantity(product.id, 1);
        }}
        type="number"
        value={product.quantity}
      />
    </div>
    Total:
    <Money locale="en-US" currency="USD">
      {totalPrice}
    </Money>
  </div>
);
