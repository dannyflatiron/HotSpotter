import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <p className="review content">{review.content}</p>
    )
}

export default ReviewCard