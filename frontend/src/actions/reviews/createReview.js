export const addReview = review => {
  return {
    type: "ADD_REVIEW",
    review
  }
}

export const createReview = (review, userId) => {
    const data = {
        content: review.content,
        user_id: userId
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

