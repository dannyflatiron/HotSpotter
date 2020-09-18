export const setReviewedMarkers = (reviews) => {
  return {
    type: "SET_REVIEWED_MARKERS",
    reviews,
  };
};

export const setReviewedMarker = (review) => {
    // THIS WORKS LEAVE IT ALONE
  return {
    type: "SET_REVIEWED_MARKER",
    review,
  };
};

export const getReviewedMarkers = () => {
  // THIS WORKS LEAVE IT ALONE
  return (dispatch) => {
    return fetch(`http://localhost:3000/api//v1/locations/`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // if (response.error) {
        //     alert(response.error)
        // } else {
          const reviews = response.data.map(d => d.attributes)
          // console.log("getReviewMarkers, review map:", review)
        dispatch(setReviewedMarkers(reviews));
        // }
      })
      .catch(console.log);
  };
};

export const getMarker = (id) => {
  // THIS WORKS LEAVE IT ALONE
  return (dispatch) => {
    return fetch(`http://localhost:3000/api//v1/locations/${id}/`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const t = response.data.attributes
          dispatch(setReviewedMarker(t))
      })
      .catch(console.log);
  };
};
