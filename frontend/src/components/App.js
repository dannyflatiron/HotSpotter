import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"
import { getCurrentUser } from "../actions/users/currentUser.js"


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    // if (this.props.currentUser) {
    //   this.props.getCurrentUser()
    // }
  }

  render() {
    return (
    this.props.currentUser ? <Logout/> : <Login/>
    )
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}
        {/* <Map google={this.props.google} /> */}


const WrappedContainer = GoogleApiWrapper({
  // apiKey: (process.env.REACT_APP_API_KEY)
})(App)

export default connect(mapStateToProps, { getCurrentUser })(WrappedContainer)
 