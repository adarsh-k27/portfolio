import React,{useReducer} from 'react'
import { DETAILS, SKILLS } from '../Action'
import {MY_CONTEXT} from '../Context'
import {MyReducer} from '../Reducer'
const InitialState={
    MyDetails:{},
    Skills:[]
}
function MY_PROVIDER(props) {
    const [state,dispatch]=useReducer(MyReducer,InitialState)
    const GetDetails=(details)=>{
        dispatch({type:DETAILS,payload:details})
    }
    
  return (
    <MY_CONTEXT.Provider value={{state,GetDetails}}>
        {props.children}
    </MY_CONTEXT.Provider>
  )
}

export default MY_PROVIDER