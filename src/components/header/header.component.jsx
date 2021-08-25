import React from "react";

import CartIconContainer from "../cart-icon/cart-icon.container";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles.jsx";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink to="/#" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIconContainer />
    </OptionsContainer>
    {hidden ? null : <CartDropdownContainer />}
  </HeaderContainer>
);

export default Header;
