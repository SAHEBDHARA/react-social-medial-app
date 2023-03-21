import axios from 'axios';

const URL = "http://localhost:4000/api"

export const getPost =async ()=>{
    try {
      const res =  await axios.post(`${URL}/posts/6258f8aa05c9fef6de336f4a`);
       console.log(res)

    } catch (error) {
        console.log("The error is ", error);
    }
} 