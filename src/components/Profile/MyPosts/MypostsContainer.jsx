import React from 'react';
import {addPostAction, updatePost} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";


const MypostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAction());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updatePost(text));
    }
    return (
       <Myposts posts={props.posts}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                updateNewPostText={onPostChange} />
    )
}

export default MypostsContainer;