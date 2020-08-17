// Creating redux action types

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE= 'GET_POSTS_FAILURE'

// Create my Redux action with using action creators

export const getPosts = ()=> ({
    type: GET_POSTS,
})

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
})

// Combining all actions in an Asynchronous thunk

export function fetchPosts(){
    return async (dispatch) =>{
        dispatch(getPosts())

        try{
            const res = await
            fetch('https://www.balldontlie.io/api/v1/players')
            const data = await res.json()
            console.log(data)

            dispatch(getPostsSuccess(data.data))

        }catch(error){
            dispatch(getPostsFailure())

        }
    }
}
