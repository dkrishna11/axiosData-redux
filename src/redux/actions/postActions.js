import { POST_FETCHING, POST_FETCH_SUCCESS, POST_FETCH_ERROR } from "./actionTypes";
import axios from "axios";

export const postFetching =()=>{
    return {
        type:POST_FETCHING
    }
}

export const postFetchSuccess=(data)=>{
    return {
        type:POST_FETCH_SUCCESS,
        payload:data
    }
}

export const postFetchError=(error)=>{
    return {
        type:POST_FETCH_ERROR,
        payload:error
    }
}

export function postData(){
    return function(dispatch){
        dispatch(postFetching())
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then((reponse)=>{
            dispatch(postFetchSuccess(reponse.data))    
        })
        .catch((error)=>{
            dispatch(postFetchError(error.message))
        })
    }
}