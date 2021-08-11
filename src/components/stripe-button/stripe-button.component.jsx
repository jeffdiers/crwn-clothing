import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JN5MJHvBopaB4EOuzHBWoWmB9ZoMVNKfFlrXkVb1m2mkUeg2IvxLJyttSSXFfbSEd6sJS5u2X2jo150UJ2pK8IM009kjHUJls";

  const onToken = (token) => {
    console.log(token);
    alert("Payment proccessed");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      ammount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
