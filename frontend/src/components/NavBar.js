import React from 'react'
import { connect } from 'react-redux'
import WelcomeMessage from "./WelcomeMessage.js"
import { Link } from 'react-router-dom'
import { logout } from '../actions/users/currentUser.js'

const NavBar = ({currentUser, loggedIn, logout}) => {

    return (
      <div className="navBar" style={{zIndex:10}}>
        <WelcomeMessage user={currentUser}/> 
        <Link className="log" onClick={() => logout(currentUser.id)}>Log Out</Link>
      </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }


export default connect(mapStateToProps, { logout })(NavBar)