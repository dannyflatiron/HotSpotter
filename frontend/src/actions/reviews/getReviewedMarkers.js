export const setReviewedMarkers = (reviews) => {
  console.log("after submit fetch", reviews)
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

export const clearMarker = () => {
  // THIS WORKS LEAVE IT ALONE
return {
  type: "CLEAR_MARKER",
};
};


export const getReviewedMarkers = () => {
   console.log("is this working")
  // THIS WORKS LEAVE IT ALONE
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
        console.log("after submit", response)
        if (response.error) {
            alert(response.error)
        } else {
          const reviews = response.data.map(d => d.attributes)
          // console.log("getReviewMarkers, review map:", review)
        dispatch(setReviewedMarkers(reviews));
        }
      })
      .catch(console.log);
  };
};

export const getMarker = (id) => {
  // THIS WORKS LEAVE IT ALONE
  console.log("what happens after click ID: ", id)
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
        console.log("what happens after click: ", response)
        const t = response.data.attributes
          dispatch(setReviewedMarker(t))
      })
      .catch(console.log);
  };
};
