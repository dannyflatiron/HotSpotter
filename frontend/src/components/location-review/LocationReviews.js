import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import format from "date-fns/format";

LocationReviews.propTypes = {
  placeReviews: Object,
};

function LocationReviews({ placeReviews, handleReadReviewClick }) {
  const formattedDate = (date) => {
    return format(new Date(date), "dd MMM yyyy");
  };

  const { name, location, reviews } = placeReviews;
  return (
    <div class='location'>
      <div class='location__title'>
        <h2> Reviews </h2>
        <button onClick={handleReadReviewClick}>x</button>
      </div>
      <h3> {name} </h3>
      <h4> {location}</h4>
      {reviews.length > 0 &&
        reviews.map((review) => {
          return (
            <div key={review.id} class='location__review'>
              <h3>{review.content}</h3>
              <span> Written on : {formattedDate(review.created_at)}</span>
            </div>
          );
        })}
    </div>
  );
}

export default LocationReviews;
