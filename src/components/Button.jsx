import React from 'react'

const Button = ({className,btnTxt}) => {
  return (
    <button className={`bg-mPrimary py-3 px-14 text-white border border-mPrimary hover:bg-transparent hover:text-mPrimary hover:duration-300 hover:ease-in-out hover:transition cursor-pointer ${className}`}>{btnTxt}</button>
  )
}

export default Button