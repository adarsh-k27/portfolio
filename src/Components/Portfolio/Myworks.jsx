import React from 'react'

 const Myworks = ({title,img}) => {
  return (
    <div className='my-work'>
    <div className='img-container'>
        <img src={img} alt="mywork"></img>
    </div>
    <h5>{title}</h5>
    <a href="" className='btn '>Github</a>
    <a href="" className='btn btn-primary '>Demo</a>
    </div>
  )
}
export default Myworks;
