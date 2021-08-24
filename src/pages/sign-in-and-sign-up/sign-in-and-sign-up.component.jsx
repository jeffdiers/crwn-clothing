import React from "react";

import SignInContainer from "../../components/sign-in/sign-in.container";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignInContainer />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
