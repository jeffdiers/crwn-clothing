import { connect } from "react-redux";
import { compose } from "@redux-saga/core/node_modules/redux";

import { signUpStart } from "../../redux/user/user.actions";

import SignUp from "./sign-up.component";

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

const SignUpContainer = compose(connect(null, mapDispatchToProps))(SignUp);

export default SignUpContainer;
