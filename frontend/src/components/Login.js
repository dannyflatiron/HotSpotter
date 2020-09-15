import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/users/loginForm.js'
import { login } from '../actions/users/currentUser.js'
import UsernameInput from './UsernameInput.js'
import PasswordInput from './PasswordInput.js'

const Login = ({loginFormData, updateLoginForm, login, history}) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const formData = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(formData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
    <form onSubmit={handleSubmit}>
        <UsernameInput placeholder="username" value={loginFormData.username} type="text" name="username" onChange={handleInputChange} />
        <PasswordInput placeholder="password" value={loginFormData.password} type="text" name="password" onChange={handleInputChange} />
        <input className="submit" type="submit" value="Log In"/>
    </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)