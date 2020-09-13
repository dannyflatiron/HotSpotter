export const addReview = review => {
  return {
    type: "ADD_REVIEW",
    review
  }
}

export const createReview = (newReviewFormData) => {
    const data = {
        content: newReviewFormData.content,
        user_id: newReviewFormData.userId
    }
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
          }
        }
        )
        .catch(console.log)
  
    }
  }

