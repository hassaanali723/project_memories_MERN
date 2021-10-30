import * as api from '../api';

// Action Creators

export const getPosts = () => async(dispatch) => {
    
    try {
      
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: data}
        dispatch(action); 

    } catch (error) {
        console.log(error.message)
    }

}

export const createPost = (post) => async(dispatch) => {
    try {
        console.log(post);
        console.log(api.createPost(post));
        const { data } = await api.createPost(post);
        console.log(data);
        //console.log(api.createPost(post));
        // api.createPost(post).then(response => {
         dispatch({ type: 'CREATE', payload: data });
        // })
        //dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error)
        
    }
}
