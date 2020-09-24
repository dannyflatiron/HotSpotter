export const setReviewedMarkers = (reviews) => {
  return {
    type: "SET_REVIEWED_MARKERS",
    reviews,
  };
};

export const setReviewedMarker = (review) => {
  return {
    type: "SET_REVIEWED_MARKER",
    review,
  };
};

export const clearMarker = () => {
return {
  type: "CLEAR_MARKER",
};
};


export const getReviewedMarkers = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/locations/`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
            alert(response.error)
        } else {
          const reviews = response.data.map(d => d.attributes)
        dispatch(setReviewedMarkers(reviews));
        }
      })
      .catch(console.log);
  };
};

export const getMarker = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api//v1/locations/${id}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const review = response.data.attributes
          dispatch(setReviewedMarker(review))
      })
      .catch(console.log);
  };
};
