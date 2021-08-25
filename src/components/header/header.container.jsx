import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { signOutStart } from "../../redux/user/user.actions";

import Header from "./header.component";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const HeaderContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Header
);

export default HeaderContainer;
