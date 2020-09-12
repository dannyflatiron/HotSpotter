import React from 'react';
import { updateNewReviewForm } from '../actions/reviews/newReviewForm'
import { createReview } from '../actions/reviews/createReview.js'
import { connect } from 'react-redux'

const NewReviewForm = ({newReviewFormData, updateNewReviewForm, createReview, userId}) => {
// console.log("newReviewFormData", newReviewFormData.content)

  const handleChange = event => {
    let content  = newReviewFormData.content
    let user = newReviewFormData.user_id
    content = event.target.value
    const formData = {
      content,
      userId
    }

    updateNewReviewForm(formData)
    return formData
  }

  const handleSubmit = (event, userId) => {
    event.preventDefault()
    createReview(newReviewFormData, userId)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="content" onChange={handleChange} value={undefined} />
      <input type="submit" value="Submit Review"/>
    </form>
  )
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id: ""
  return {
    newReviewFormData: state.newReviewForm,
    userId
  } 
}

export default connect(mapStateToProps, { updateNewReviewForm, createReview })(NewReviewForm);