import React from 'react'

const Button = ({button}) => {

   const handleClick = () => alert ("Hola")
  return (
    <button  onClick={handleClick}>{button}</button>
  )
}

export default Button