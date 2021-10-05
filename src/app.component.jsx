import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HeaderContainer from "./components/header/header.container";
import HomePage from "./pages/homepage/homepage.component";
import ShopPageContainer from "./pages/shop/shop.container";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPageContainer from "./pages/checkout/checkout.container";

import "./app.styles.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPageContainer} />
        <Route exact path="/checkout" component={CheckoutPageContainer} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
