import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"
import WelcomeMessage from "./WelcomeMessage.js"

const NavBar = ({currentUser}) => {
    return (
        <div className="nav">
            {currentUser ? <><WelcomeMessage user={currentUser}/><Logout /></> : <Login/>}
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(NavBar)