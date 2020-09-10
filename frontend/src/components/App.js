import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from 'react-redux'
import { getCurrentUser } from "../actions/users/currentUser.js"
import NavBar from "./NavBar.js"
import Review from "./Review.js"
import '../App.css';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
    <div className="App">
      <NavBar />
      <Map google={this.props.google} />
      <Review />
    </div>  

    )
  }
}



const WrappedContainer = GoogleApiWrapper({
  // apiKey: (process.env.REACT_APP_API_KEY)
})(App)

export default connect(null, { getCurrentUser })(WrappedContainer)
 