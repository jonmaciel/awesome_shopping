import React from 'react';
import Product from './Product';
import { Money } from 'react-format';

export default ({
  product,
  onRemoveProduct,
  onChangeProductQuantity,
  quantity,
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
        tabIndex="2"
        onChange={e => onChangeProductQuantity(product.id, e.target.value)}
        onBlur={e => {
          if (e.target.value <= 0) onChangeProductQuantity(product.id, 1);
        }}
        type="number"
        value={quantity}
      />
    </div>
    Total:
    <div className="item-price">
      <Money locale="en-US" currency="USD">
        {product.price * quantity}
      </Money>
    </div>
  </div>
);
