import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import reviews from './reducers/reviews'
import signupForm from './reducers/signupForm'
import newReviewForm from './reducers/newReviewForm.js'

const reducer = combineReducers({
    currentUser,
    loginForm,
    reviews,
    signupForm,
    newReviewForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);


