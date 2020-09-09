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
  apiKey: ('AIzaSyC1uMnF0nd-1kIbogZpBJ2CTk2cxdknAtI')
})(App);
 