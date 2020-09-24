import React from 'react'
import { connect } from 'react-redux'


const ReviewButton = () => {

    const handleOnClick = event => {
        event.preventDefault()
        
    }

    return (
        <button onClick={handleOnClick}>All Reviews</button>
    )
}

export default connect(null, {  })(ReviewButton)