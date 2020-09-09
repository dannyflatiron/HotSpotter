import React from 'react';
import './App.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from 'react-redux'
import Login from "./components/Login.js"


class App extends React.Component {

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

export default connect(mapStateToProps)(WrappedContainer)
 