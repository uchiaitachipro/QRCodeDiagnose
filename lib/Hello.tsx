import React from 'react'
interface Greeting {
    name : String
}

const Hello = (props : Greeting) => <h1> Hello {props.name}</h1>

export default Hello