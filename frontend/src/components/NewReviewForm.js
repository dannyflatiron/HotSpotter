import React from "react";
import { updateNewReviewForm } from "../actions/reviews/newReviewForm";
import { resetNewReviewForm } from "../actions/reviews/newReviewForm";
import { createReview } from "../actions/reviews/createReview.js";
import { connect } from "react-redux";

const NewReviewForm = ({
  newReviewFormData,
  updateNewReviewForm,
  createReview,
  userId,
  resetNewReviewForm,
}) => {
  const handleChange = (event) => {
    let content = event.target.value;

    const formData = {
      content,
      userId,
    };

    updateNewReviewForm(formData);
  };

  const handleSubmit = (event, userId) => {
    // userId might not be needed since the state of form carries the userId already
    event.preventDefault();
    createReview(newReviewFormData, userId);
    resetNewReviewForm();
  };

  return userId ? (
    <form onSubmit={handleSubmit}>
      <input
        className='content reviewInput'
        name='content'
        onChange={handleChange}
        value={newReviewFormData.content}
        placeholder="Create Review"
      />
      <input className='submit' type='submit' value='Submit Review' />
    </form>
  ) : (
    "Please login or signup to review"
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    newReviewFormData: state.newReviewForm,
    userId,
  };
};

export default connect(mapStateToProps, {
  updateNewReviewForm,
  createReview,
  resetNewReviewForm,
})(NewReviewForm);
