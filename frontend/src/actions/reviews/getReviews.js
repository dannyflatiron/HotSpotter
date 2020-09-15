export const setReviews = reviews => {
    return {
        type: "SET_REVIEWS",
        reviews
    }
}

export const getReviews = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api//v1/reviews", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            // if (response.error) {
            //     alert(response.error)
            // } else {
                dispatch(setReviews(response))
            // }
        })
        .catch(console.log)
    }
}

