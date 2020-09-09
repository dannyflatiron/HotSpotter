const initialState = {
    username: "",
    password: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_LOGIN_FROM":
            return action.formData
        default:
            return state
    }
}