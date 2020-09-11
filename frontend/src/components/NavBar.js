import React from 'react'
import { connect } from 'react-redux'
import Logout from "./Logout.js"
import WelcomeMessage from "./WelcomeMessage.js"
import ReviewButton from "./ReviewButton.js"
import Home from "./Home.js"

const NavBar = ({currentUser, loggedIn}) => {
    return (
      <div className="NavBar">
        {loggedIn ? <><WelcomeMessage user={currentUser}/><Logout /><ReviewButton/></> : <Home/>}
      </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }


export default connect(mapStateToProps)(NavBar)