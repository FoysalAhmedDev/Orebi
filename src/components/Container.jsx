import React, { Children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-mContainer mx-auto ${className}`}>{children}</div>
  )
}

export default Container