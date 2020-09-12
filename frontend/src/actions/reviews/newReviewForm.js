export const updateNewReviewForm = (formData) => {
    return {
      type: "UPDATE_NEW_REVIEW_FORM",
      formData
    }
  }
  
  export const resetNewReviewForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
  }



