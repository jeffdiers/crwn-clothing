import { FC } from "react";

import { CartItem as CartItemType } from "../../redux/cart/cart.types";

import {
  CartitemContainer,
  ItemDetailContainer,
  NameContainer,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({
  cartItem: { imageUrl, price, name, quantity },
}) => (
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
