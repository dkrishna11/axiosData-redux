import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../redux/actions/postActions";


const PostDisplay=()=>{
    const {loading, data, error}=useSelector(state=>state);
    console.log(loading, data, error)
    const dispatch=useDispatch();
    useEffect(()=>{
        // dispatch(postFetching())
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        // .then((reponse)=>{
        //     dispatch(postFetchSuccess(reponse.data))    
        // })
        // .catch((error)=>{
        //     dispatch(postFetchError(error.message))
        // })
        dispatch(postData())
    }, [dispatch])

    return (
        <div>
            {
                data && data.map((item, index)=>(
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                )

                )
            }
        </div>
    )
}

export default PostDisplay