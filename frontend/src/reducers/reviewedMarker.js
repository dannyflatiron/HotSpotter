const initialState = {
    reviewedMarker: {
        reviews: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REVIEWED_MARKER":
            return state.reviewedMarker =  action.review;
        case "CLEAR_MARKER":
            return state.reviewedMarker = {
                reviews: []
            };
        default: 
            return state;
    };
};