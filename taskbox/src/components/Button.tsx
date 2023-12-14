import React from 'react'
import './button.css';


const Button = ({button: {text, primary, size}}) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';

  return (
    <button 
    className={['btn', `btn-${size}`, mode].join(' ')}
    >
    {text}
    </button>
  )
}

export default Button