import React, { useContext } from 'react'
import Box from './Box'
import MyExpieriance from './MyExpieriance'
import { MY_CONTEXT } from '../../Context'
import './style.css'
const Expieriance = () => {
  const { Skills } = useContext(MY_CONTEXT).state
  return (
    <section id='expieriance'>
      <h5>what Skils I Have </h5>
      <h2>My ExPieriance</h2>
      <div className='container expieriance__container'>
        <div className='my_expieriance'>
          {Skills &&
            Skills.map(item => (
              <MyExpieriance title={item.Title}>
                <div className='expieriances'>
                  {item.Skills &&
                    item.Skills.map(skill => (
                      <Box item={skill.Name} exp={skill.Exp} />
                    ))}
                </div>
              </MyExpieriance>
            ))}
        </div>
      </div>
    </section>
  )
}
export default Expieriance
