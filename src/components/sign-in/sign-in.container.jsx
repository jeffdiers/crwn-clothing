import { connect } from "react-redux";
import { compose } from "@redux-saga/core/node_modules/redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import SignIn from "./sign-in.component";

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const SignInContainer = compose(connect(null, mapDispatchToProps))(SignIn);

export default SignInContainer;
