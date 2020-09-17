import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import currentUser from "./reducers/currentUser";
import loginForm from "./reducers/loginForm";
import reviews from "./reducers/reviews";
import signupForm from "./reducers/signupForm";
import newReviewForm from "./reducers/newReviewForm.js";
import locations from "./reducers/locations.js";
import locationMarker from "./reducers/locationMarker.js";

const reducer = combineReducers({
  currentUser,
  loginForm,
  reviews,
  signupForm,
  newReviewForm,
  locations,
  locationMarker,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
