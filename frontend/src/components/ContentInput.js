import React from 'react'

const ContentInput = (props) => {
    console.log("props", props)
    return (
        < input className={props.className} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange}/>
      )
}

export default ContentInput