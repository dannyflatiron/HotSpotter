import React, { useState } from "react";
import { updateNewReviewForm, resetNewReviewForm } from "../actions/reviews/newReviewForm";
import { createReview } from "../actions/reviews/createReview.js";
import {  getMarker } from "../actions/reviews/getReviewedMarkers.js";
import { connect } from "react-redux";

const NewReviewForm = ({
  newReviewFormData,
  updateNewReviewForm,
  createReview,
  userId,
  resetNewReviewForm,
  locationMarker,
  reviewedMarker,
  getMarker
}) => {
  const [isError, setError] = useState(false);
  const handleChange = (event) => {
    let content = event.target.value;
  content ? setError(false) : setError(true);
    const formData = {
      content,
      userId,
      locationMarker,
    };
    updateNewReviewForm(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!newReviewFormData.content) {
      setError(true);
      return;
    }
    await createReview(newReviewFormData);
    await getMarker(locationMarker.objectid)
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
      {isError && <p> Please fill to submit the review</p>} 
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
    reviewedMarker: state.reviewedMarker
  };
};

export default connect(mapStateToProps, {
  updateNewReviewForm,
  createReview,
  resetNewReviewForm,
  getMarker,
})(NewReviewForm);
