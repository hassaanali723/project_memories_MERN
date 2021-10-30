import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import Post from './Post/Post.js';
import useStyles from './styles.js';
//type RootState = ReturnType<typeof store.getState>;

const Posts = () => {
   const posts = useSelector((state) => state.posts);
   const classes = useStyles();
   console.log(posts);

    return (
        <div>
            Posts
            {console.log(posts)}
            <Post/>
            <Post/>

        </div>
    )
}

export default Posts;


