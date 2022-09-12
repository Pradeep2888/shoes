//Create ActionCreator functions here
import * as types from "./actionTypes"
import axios from "axios"

const login=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios
    .post("https://reqres.in/api/login",payload)
    .then((r)=>{
    dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token})
    })
    .catch(()=>{
        dispatch({type:types.LOGIN_FAILURE})
    })
    
    
}

export {login}