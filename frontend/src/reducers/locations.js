const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOCATIONS":
            return action.locations
        case "CLEAR_LOCATIONS":
            return []
        default:
            return state;
    };
};