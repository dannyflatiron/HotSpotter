import React from 'react'

const ContentInput = (props) => {
    return (
        < input className={props.className} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange}/>
      )
}

export default ContentInput