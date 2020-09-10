import React from 'react'

const ReviewCard = ({ review }) => {
    console.log(review)
    return (
        <p>{review.attributes.content}</p>
    )
}

export default ReviewCard