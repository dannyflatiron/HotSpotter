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
  locationMarker,
}) => {
  const handleChange = (event) => {
    let content = event.target.value;
    const formData = {
      content,
      userId,
      locationMarker,
    };
    console.log(formData);
    updateNewReviewForm(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createReview(newReviewFormData);
    resetNewReviewForm();
  };

  return userId ? (
    <form onSubmit={handleSubmit}>
      <input
        className='content reviewInput'
        name='content'
        onChange={handleChange}
        value={newReviewFormData.content}
        placeholder='Create Review'
      />
      <input className='submit' type='submit' value='Submit Review' />
    </form>
  ) : (
    <p>Please login or signup to review</p>
  );
};

const mapStateToProps = (state) => {
  const locationMarker = state.locationMarker;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    newReviewFormData: state.newReviewForm,
    userId,
    locationMarker,
  };
};

export default connect(mapStateToProps, {
  updateNewReviewForm,
  createReview,
  resetNewReviewForm,
})(NewReviewForm);
