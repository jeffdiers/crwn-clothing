import React from "react";

import {
  CartitemContainer,
  ItemDetailContainer,
  NameContainer,
} from "./cart-item.styles";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <CartitemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailContainer>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailContainer>
  </CartitemContainer>
);

export default CartItem;
