import { connect } from "react-redux";
import { compose } from "redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import CheckoutItem from "./checkout-item.component";

const mapDispatchFromProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

const CheckoutItemContainer = compose(connect(null, mapDispatchFromProps))(
  CheckoutItem
);

export default CheckoutItemContainer;
