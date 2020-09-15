import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'
// import { GoogleMap, Marker, useLoadScript, InfoWindow } from '@react-google-maps/api'
// import { formRelative } from "data-fns"
import { getCurrentUser } from "../actions/users/currentUser.js"
import NavBar from "./NavBar.js"
import Review from "./Review.js"
import Home from "./Home.js"
import Login from "./Login.js"
import Signup from "./Signup.js"
// import WrappedContainer from "./WrappedContainer.js"
import NewReview from "./NewReviewForm.js"
// import { BrowserRouter, Route } from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import history from '../history';
import mapStyles from "../mapStyles.js"


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const loggedIn = this.props.loggedIn
    const mapContainerStyle = {
      // width: "100vw",
      // height: "100vh"
      mapStyles
    }
    const center = {
      lat: 40.678177,
      lng: -73.944160
    }
    const options = {
      disableDefaultUI: true
    }

    const styles = require('../mapStyles.js')
    return (
    <div className="App">
      {/* <Map google={this.props.google} /> */}
      {/* <BrowserRouter > this is the right code */}
      <Router history={history}>
      {/* { this.props.loggedIn ? <NavBar /> : <Home/> } */}
        {/* <Route exact path='/' component={() => this.props.loggedIn ? <NavBar/> : <Home/>}/> */}
        { loggedIn ? <NavBar /> : <Home/> } 
        <Route  path='/login' exact component={Login}/>
        <Route  path='/signup' exact component={Signup}/>
        <Route  path='/reviews' exact component={Review}/>
        <Route  path='/reviews/new' exact component={NewReview}/>
        <Map google={this.props.google} zoom={12} initialCenter={center} styles={mapStyles} disableDefaultUI={options}/>
        <Route  path='/navbar' exact component={NavBar}/>

      </Router>
      {/* </BrowserRouter> */}
    </div>  


    )
  }
}

  const mapStateToProps = ({ currentUser }) => {
  return ({
    loggedIn: !!currentUser
  })
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(App)

export default connect(mapStateToProps, { getCurrentUser })(WrappedContainer) 