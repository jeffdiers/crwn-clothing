import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  TotalContainer,
  TestWarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalValue }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <div>
        <span>Product</span>
      </div>
      <div>
        <span>Description</span>
      </div>
      <div>
        <span>Quantity</span>
      </div>
      <div>
        <span>Price</span>
      </div>
      <div>
        <span>Remove</span>
      </div>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${totalValue}</TotalContainer>
    <TestWarningContainer>
      *Please us the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={totalValue} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
