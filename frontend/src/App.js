import React from 'react';
import './App.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


class App extends React.Component {


  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
    .then(response => response.json())
    .then(data => console.log(data))
  }

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
 