import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { getCurrentUser } from "../actions/users/currentUser.js"
import NavBar from "./NavBar.js"
import Review from "./Review.js"
import Home from "./Home.js"
import Login from "./Login.js"
import Signup from "./Signup.js"
// import WrappedContainer from "./WrappedContainer.js"
import NewReview from "./NewReviewForm.js"
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const loggedIn = this.props.loggedIn
    return (
    <div className="App">
      {/* <Map google={this.props.google} /> */}
      <BrowserRouter >
      {/* { this.props.loggedIn ? <NavBar /> : <Home/> } */}
        {/* <Route exact path='/' component={() => this.props.loggedIn ? <NavBar/> : <Home/>}/> */}
        { loggedIn ? <NavBar /> : <Home/> } 
        <Route  path='/login' exact component={Login}/>
        <Route  path='/signup' exact component={Signup}/>
        <Route  path='/reviews' exact component={Review}/>
        <Route  path='/reviews/new' exact component={NewReview}/>
        <Map google={this.props.google} />
        <Route  path='/navbar' exact component={NavBar}/>

       
      </BrowserRouter>
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
  // apiKey: (process.env.REACT_APP_API_KEY)
})(App)

export default connect(mapStateToProps, { getCurrentUser })(WrappedContainer)

// const WrappedContainer = GoogleApiWrapper({
//   // apiKey: (process.env.REACT_APP_API_KEY)
// })(App)

// export default connect(mapStateToProps, { getCurrentUser })(App)
 