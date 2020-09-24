import React from "react";
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
    <div className='location'>
      <div className='location__title'>
        <h2> Reviews </h2>
        <button onClick={handleReadReviewClick}>x</button>
      </div>
      <h3> {name} </h3>
      <h4> {location}</h4>
        {reviews && reviews.length > 0 ?
        reviews.map((review) => {
          return (
            <div key={review.id} className='location__review'>
              <h3>{review.content}</h3>
              <span> Written on : {formattedDate(review.created_at)}</span>
            </div>
          );
        }) : <div>No Reviews. Please create one.</div>}
    </div>
  );
}

export default LocationReviews;
