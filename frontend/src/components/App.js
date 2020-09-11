import React from 'react';
import '../App.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from 'react-redux'
import { getCurrentUser } from "../actions/users/currentUser.js"
import NavBar from "./NavBar.js"
import Review from "./Review.js"
import Login from "./Login.js"
import Signup from "./Signup.js"
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
    <div className="App">
      <NavBar />
      {/* <Map google={this.props.google} /> */}
      <Review />
      <Router >
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/reviews' component={Review}/>
      </Router>
    </div>  

    )
  }
}



const WrappedContainer = GoogleApiWrapper({
  // apiKey: (process.env.REACT_APP_API_KEY)
})(App)

export default connect(null, { getCurrentUser })(WrappedContainer)
 