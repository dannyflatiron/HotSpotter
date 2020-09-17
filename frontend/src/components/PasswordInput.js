import React from 'react'

const PasswordInput = (props) => {
    return (
        <input className="password" type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange}/>
    )
}

export default PasswordInput