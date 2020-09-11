import React from 'react'

const WelcomeMessage = ({user}) => {
    console.log("welcome message", user)
    return (
        <p id="logged_in">Welcome, {user.attributes.username}</p>
    )
}

export default WelcomeMessage