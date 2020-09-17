import React from 'react'
import { connect } from 'react-redux'
import WelcomeMessage from "./WelcomeMessage.js"
import { Link } from 'react-router-dom'
import { logout } from '../actions/users/currentUser.js'
import { useHistory } from "react-router-dom"

const NavBar = ({currentUser, loggedIn, logout}) => {

    return (
      <div className="navBar" style={{zIndex:10}}>
        {/* {loggedIn ? <><WelcomeMessage user={currentUser}/><Logout to="/" /></> : <Home/>} */}
        <WelcomeMessage user={currentUser}/> 
        <Link className="log" to="/locations">Map  |  </Link>        
        <Link  className="log" to="/reviews" >View All Reviews  |  </Link>
        <Link  className="log" to="/reviews/new">New Review  |  </Link>  
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