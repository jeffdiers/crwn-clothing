import React from "react";

import SignInContainer from "../../components/sign-in/sign-in.container";
import SignUpContainer from "../../components/sign-up/sign-up.container";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignInContainer />
    <SignUpContainer />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
