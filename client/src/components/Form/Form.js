import React, {useState} from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import { createPost } from '../../api/index.js';

const Form = () => {
const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
});
 const classes = useStyles();
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(createPost(postData));
 }

 const clear = () => {

 }

    return (
        <div>
            <Paper className={classes.paper}>
                <form 
                autoComplete="off" 
                noValidate 
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}></form>

                <Typography variant="h6">Creating a Memory</Typography>
                <TextField 
                className={classes.textField}
                name="creator"
                variant="outlined"
                label="Creator"
                fullWidth
                value={postData.creator} 
                onChange={(e) => setPostData({...postData,creator: e.target.value})} />

                <TextField 
                className={classes.textField}
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={postData.title} 
                onChange={(e) => setPostData({...postData,title: e.target.value})} />

                <TextField 
                className={classes.textField}
                name="message"
                variant="outlined"
                label="Message"
                fullWidth
                value={postData.message} 
                onChange={(e) => setPostData({...postData,message: e.target.value})} />

                <TextField 
                className={classes.textField} 
                name="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                value={postData.tags} 
                onChange={(e) => setPostData({...postData,tags: e.target.value})} />
                
                <div className={classes.fileInput}>
                <FileBase 
                type='file'
                multiple={false}
                onDone={({base64}) => setPostData({...postData,selectedFile: base64})} />
                </div>

                <Button className={classes.buttonSubmit} 
                variant="contained" 
                color="primary"
                size="large"
                type="submit"
                onClick={handleSubmit}
                fullWidth>Submit</Button>

                <Button 
                variant="contained" 
                color="secondary"
                size="small"
                onClick={clear}
                fullWidth>Clear </Button>


            </Paper>
        </div>
    )
}

export default Form;


