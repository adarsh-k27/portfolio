import React from 'react'
import './style.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import Myworks from './Myworks'
 const Portfolio = () => {
    const Datas=[{
        image:IMG1,
        title:"CryptoCurency DashBoard",
        github:"",
        demo:""
    },
    {
        image:IMG2,
        title:"Chart Templates",
        github:"",
        demo:""
    },
    {
        image:IMG3,
        title:"Figma And Dadhboard Ui Kit",
        github:"",
        demo:""
    },
    {
        image:IMG4,
        title:"Maintain Task and Tracking",
        github:"",
        demo:""
    },
    {
        image:IMG5,
        title:"Chart Templates And InphoGraphics",
        github:"",
        demo:""
    },
]
  return (
    <section id="portfolio">
    <h5>Whats My New Works</h5>
    <h2>My PortFolio</h2>
       <div className='container protfolio__container'>
        <div className='my-works'>
           {
            Datas.map((item,index)=> <Myworks title={item.title} img={item.image}/>)
           }
        </div>
       </div>
    </section>
  )
}
export default Portfolio