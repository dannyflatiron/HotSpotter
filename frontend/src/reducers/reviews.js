const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REVIEWS":
            return action.reviews
        default:
            return state;
    };
};