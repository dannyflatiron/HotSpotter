import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"

const NavBar = (props) => {
    return (
        <div className="nav">
            {props.currentUser ? `Welcome, ${props.currentUser.username}` : ''}
            {props.currentUser ? <Logout /> : <Login /> }
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps)(NavBar)