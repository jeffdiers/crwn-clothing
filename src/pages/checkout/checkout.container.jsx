import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutPage from "./checkout.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal,
});

const CheckoutPageContainer = compose(connect(mapStateToProps))(CheckoutPage);

export default CheckoutPageContainer;
