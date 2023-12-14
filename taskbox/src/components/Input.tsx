import React from 'react'
import './input.css'

const Input = ({input: {placeholder}}) => {
  return (
    <input 
    className='input'
    placeholder={placeholder}
    >
    </input>
  )
}

export default Input