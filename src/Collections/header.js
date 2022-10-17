import axios from '../helper'

export const GetMyDetails = async (get_details) => {
    try {
        const res = await axios.get('/users')
        console.log(res);
        if(res.status==200){
          get_details(res.data)
        }
    } catch (error) {
        console.log(error);
    }
}

