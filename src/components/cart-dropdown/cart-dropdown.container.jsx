import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { withRouter } from "react-router";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);

export default CartDropdownContainer;
