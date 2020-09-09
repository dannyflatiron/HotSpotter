import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import { getCurrentUser } from "../actions/users/currentUser.js"


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Login />
        {/* <Map google={this.props.google} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const WrappedContainer = GoogleApiWrapper({
  // apiKey: (process.env.REACT_APP_API_KEY)
})(App)

export default connect(mapStateToProps, { getCurrentUser })(WrappedContainer)
 