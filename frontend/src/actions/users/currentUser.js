import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getReviewedMarkers } from "../reviews/getReviewedMarkers.js"
import { clearReviews } from "../reviews/clearReviews.js"
import { resetNewReviewForm } from "../reviews/newReviewForm.js"
import history from '../../history.js';

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const signup = (signupFormData ) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signupFormData)
        })
        .then(response => response.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getReviewedMarkers())
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const login = (loginFormData ) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginFormData)
        })
        .then(response => response.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getReviewedMarkers())
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = (id, callback) => {
    // console.log("logout action", id)
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/sessions/${id}`, {
            credentials: "include",
            method: "DELETE",
            }
        )
            .then(data => {
                dispatch(clearReviews())
                dispatch(resetNewReviewForm())
                dispatch(clearCurrentUser())
                // callback()
                history.push('/')
            })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                // alert(response.error)
                // removes alert box and removes Error warning message in console
                return null
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(resetLoginForm())
                dispatch(getReviewedMarkers())
            }
        })
        .catch(console.log)
    }
}