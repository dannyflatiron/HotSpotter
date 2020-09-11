const initialState = {content: ''}

export default (state = initialState, action) => {
    switch (action.type) {
    case "UPDATE_NEW_REVIEW_FORM":
        return action.formData
    case "RESET_NEW_REVIEW_NOW":
        return initialState
    default: 
        return state
    }
}