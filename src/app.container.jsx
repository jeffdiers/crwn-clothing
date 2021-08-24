import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";

import App from "./app.component";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const AppContainer = compose(connect(mapStateToProps))(App);

export default AppContainer;
