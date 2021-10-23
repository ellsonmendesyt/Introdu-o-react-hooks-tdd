import React from 'react'
import {string} from 'prop-types'
const Button = (props) =>  <button>{props.children}</button>
    
Button.propTypes={
    children:string
}

export default Button
