const initialState = null

export default (state = initialState, action) => {
    console.log("location marker reducer", action)
    switch (action.type) {
        case "SET_LOCATION_MARKER":
            return action.location
        default:
            return state;
    };
};