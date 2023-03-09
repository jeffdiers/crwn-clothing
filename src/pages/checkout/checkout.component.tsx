import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  TotalContainer,
  TestWarningContainer,
} from "./checkout.styles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalValue = useSelector(selectCartTotal);

  return (
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
};

export default CheckoutPage;
