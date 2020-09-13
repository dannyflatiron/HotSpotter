// import React from 'react'
// import { connect } from 'react-redux'
// import { logout } from '../actions/users/currentUser.js'
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'


// const Logout = ({ logout, currentUser }) => {
//     const history = useHistory()
//     return (
//     <form onSubmit={event => {
//         event.preventDefault()
//         logout(() => history('/'), currentUser.id)
//     }
//     }>
//         <input type="submit" value="Log Out"/>
//     </form>
    
//     )
// }

// const mapStateToProps = ({currentUser}) => {
//     return {
//         currentUser
//     }
// }

// export default connect(mapStateToProps, { logout })(Logout)