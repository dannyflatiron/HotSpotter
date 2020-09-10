import React from 'react'

const WelcomeMessage = (props) => {
    return (
        <p id="logged_in">Welcome, {props.user.attributes.username}</p>
    )
}

export default WelcomeMessage