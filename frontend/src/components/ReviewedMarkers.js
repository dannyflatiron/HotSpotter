import React from 'react'
import { connect } from 'react-redux'
import ReviewCard from './ReviewCard'

const ReviewedMarkers = ({ reviews }) => {
    // const reviewCards = reviews.map(r => <ReviewCard review={r} key={r.id}/>)
    return (
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(Reviews)