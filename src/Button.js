import React from 'react'

function Button(props){
    return <button onClick={props.event}>{props.title}</button>
}

export default Button;