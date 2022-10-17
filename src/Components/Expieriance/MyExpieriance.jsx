import React from 'react'

const MyExpieriance = ({children,title}) => {
  return (
    <div className='expieriance_box'>
      <h4>{title}</h4>
      {children}
    </div>
  )
}
export default MyExpieriance
