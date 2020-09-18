const initialState = null

export default (state = initialState, action) => {
      // THIS WORKS LEAVE IT ALONE
    switch (action.type) {
        case "SET_REVIEWED_MARKER":
            return action.review;
        default: 
            return state;
    };
};