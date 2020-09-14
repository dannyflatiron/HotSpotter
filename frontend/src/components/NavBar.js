import React from 'react'
import { connect } from 'react-redux'
import WelcomeMessage from "./WelcomeMessage.js"
import { Link } from 'react-router-dom'
import { logout } from '../actions/users/currentUser.js'
import { useHistory } from "react-router-dom"

const NavBar = ({currentUser, loggedIn, logout}) => {
    return (
      <div className="NavBar">
        {/* {loggedIn ? <><WelcomeMessage user={currentUser}/><Logout to="/" /></> : <Home/>} */}
        <WelcomeMessage user={currentUser}/> 
        <Link  to="/locations">Map  |  </Link>        
        <Link  to="/reviews" >View All Reviews  |  </Link>
        <Link  to="/reviews/new">New Review  |  </Link>  
        <Link onClick={() => logout(currentUser.id)}>Log Out</Link>
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