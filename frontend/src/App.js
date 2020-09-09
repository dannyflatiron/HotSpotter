import React from 'react';
import './App.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(App);
 