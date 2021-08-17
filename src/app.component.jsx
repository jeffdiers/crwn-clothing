import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HeaderContainer from "./components/header/header.container";
import HomePage from "./pages/homepage/homepage.component";
import ShopPageContainer from "./pages/shop/shop.container";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPageContainer from "./pages/checkout/checkout.container";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./app.styles.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPageContainer} />
          <Route path="/checkout" component={CheckoutPageContainer} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
