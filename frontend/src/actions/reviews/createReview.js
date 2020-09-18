import history from '../../history.js';

export const addReview = review => {
  return {
    type: "ADD_REVIEW",
    review
  }
}

export const createReview = (newReviewFormData) => {
  console.log("action form", newReviewFormData.locationMarker.location)
    const data = {
        content: newReviewFormData.content,
        user_id: newReviewFormData.userId,
        location: newReviewFormData.locationMarker.location,
        name: newReviewFormData.locationMarker.name,
        ssid: newReviewFormData.locationMarker.ssid,
        price: newReviewFormData.locationMarker.type
    }
    console.log("data", data)
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/reviews", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(addReview(resp))
            history.push('/reviews')
          }
        }
        )
        .catch(console.log)
  
    }
  }

