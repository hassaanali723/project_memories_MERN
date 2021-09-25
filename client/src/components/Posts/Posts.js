import React from 'react'
import Post from './Post/Post.js';
import useStyles from './styles.js';
  

const Posts = () => {
    
   const classes = useStyles();

    return (
        <div>
            Posts
            <Post/>
            <Post/>

        </div>
    )
}

export default Posts;


