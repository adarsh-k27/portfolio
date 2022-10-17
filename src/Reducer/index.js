import { DETAILS, SKILLS } from "../Action";

export const MyReducer=(state,action)=>{
    switch(action.type){
        case DETAILS:return{
            ...state,
            MyDetails:action.payload.Details,
            Skills:action.payload.skills
        }
        
        default:return {}
    }
}