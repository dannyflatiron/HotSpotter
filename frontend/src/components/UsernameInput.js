import React from 'react'

const UsernameInput = (props) => {
    return (
        < input className="username" type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange}/>
    )
}

export default UsernameInput