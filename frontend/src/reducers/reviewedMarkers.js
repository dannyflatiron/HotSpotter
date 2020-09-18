const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REVIEWED_MARKERS":
            return action.reviews
        default: 
            return state;
    };
};