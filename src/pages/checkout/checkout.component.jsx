import React from "react";

import CheckoutItemContainer from "../../components/checkout-item/checkout-item.container";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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
      <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
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

export default CheckoutPage;
