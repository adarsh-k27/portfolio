import React from 'react'

 const Cards = ({icon,label,desc}) => {
  return (
    <article className='card'>
      <p className='icon'>{icon}</p>
      <p>{label}</p>
      <p className='desc'>{desc}</p>
    </article>
  )
}
export default Cards
