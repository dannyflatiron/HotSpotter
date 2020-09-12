const initialState = []

export default (state = initialState, action) => {
    console.log("add review action in reducer", action)
    switch (action.type) {
        case "SET_REVIEWS":
            return action.reviews
        case "ADD_REVIEW":
            return state.concat(action.review)
        default:
            return state;
    };
};