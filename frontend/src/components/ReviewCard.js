import React from 'react'

const ReviewCard = ({ review }) => {
    console.log(review)
    return (
        <p className="review content">{review.attributes.content}</p>
    )
}

export default ReviewCard