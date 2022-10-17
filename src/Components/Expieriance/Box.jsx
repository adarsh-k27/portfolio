import React from 'react'
import { BsPatchCheck } from 'react-icons/bs'
const Box = ({item,exp}) => {
  return (
    <div className='box'>
      <BsPatchCheck className='checked' />{' '}
      <h4 style={{ display: 'inline', marginLeft: '1rem',color:"white" }}>{item}</h4>
      <p className='exp-desc'>{exp}</p>
    </div>
  )
}
export default Box
