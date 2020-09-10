import React from 'react'
import { connect } from 'react-redux'
import { getReviews } from '../actions/reviews/getReviews.js'


const ReviewButton = () => {

    const handleOnClick = event => {
        event.preventDefault()
        getReviews()
    }

    return (
        <button onClick={handleOnClick}>All Reviews</button>
    )
}

export default connect(null, { getReviews })(ReviewButton)