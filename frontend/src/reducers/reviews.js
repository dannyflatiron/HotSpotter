const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REVIEWS":
            return action.reviews
        case "ADD_REVIEW":
            return state.concat(action.review.data.attributes)
        default:
            return state;
    };
};