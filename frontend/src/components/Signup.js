import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/users/signupForm.js'
import { signup } from '../actions/users/currentUser.js'
import UsernameInput from './UsernameInput.js'
import PasswordInput from './PasswordInput.js'

const Signup = ({signupFormData, updateSignupForm, signup}) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const formData = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(formData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target)
        signup(signupFormData)
    }

    return (
    <form onSubmit={handleSubmit}>
        <UsernameInput placeholder="username" value={signupFormData.username} type="text" name="username" onChange={handleInputChange} />
        <PasswordInput placeholder="password" value={signupFormData.password} type="text" name="password" onChange={handleInputChange} />
        <input type="submit" value="Sign Up"/>
    </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)