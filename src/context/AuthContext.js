import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {"_id": "641acb7456893d72f85f3a73","username":"Goat","email":"goat@gmail.com","password":"$2b$10$PLOV7ps4orokEFVjHLKrzOO/cYr7xtVRyPoZ1Fa4wVcTyXQ5SwlIu","profilePicture":"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg","coverPicture":"https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80","followers":["6257dced5116d9cb97bcd954","641b296e4c387a755eae97f4","6257dd155116d9cb97bcd958","6257dcfe5116d9cb97bcd956"],"followings":["6257dcfe5116d9cb97bcd956","6257dd155116d9cb97bcd958"],"isAdmin":false,"createdAt":{"$date":{"$numberLong":"1679477620630"}},"updatedAt":{"$date":{"$numberLong":"1679512432620"}},"__v":{"$numberInt":"0"},"desc":"LOL"},
    isFetching: false,
    error: false 
}


export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider =  ({children})=>{
    const [state , dispatch ] = useReducer(AuthReducer, INITIAL_STATE)
    
    return(
        <AuthContext.Provider value={{
            user:state.user, 
            isFetching:state.isFetching, 
            error:state.error,
            dispatch
            }}>

             {children}

        </AuthContext.Provider>
    )
}