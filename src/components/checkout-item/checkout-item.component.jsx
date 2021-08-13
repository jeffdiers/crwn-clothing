import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({
  cartItem,
  _clearItemFromCart,
  _addItem,
  _removeItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => _removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => _addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => _clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchFromProps = (dispatch) => ({
  _clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  _addItem: (item) => dispatch(addItem(item)),
  _removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchFromProps)(CheckoutItem);
