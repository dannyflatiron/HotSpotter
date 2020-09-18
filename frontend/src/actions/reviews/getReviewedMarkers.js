export const setReviewedMarkers = (reviews) => {
  return {
    type: "SET_REVIEWED_MARKERS",
    reviews,
  };
};

export const getReviewedMarkers = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api//v1/locations", {
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
        dispatch(setReviewedMarkers(response.data));
        // }
      })
      .catch(console.log);
  };
};
