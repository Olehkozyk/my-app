import React from 'react';
import {addPostAction, updatePost} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import StoreContext from "../../../StoreContext";

const MypostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostAction());
                }
                let onPostChange = (text) => {
                    store.dispatch(updatePost(text));
                }
                return <Myposts addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                updateNewPostText={onPostChange}/>
            }
        }
        </StoreContext.Consumer>

}

export default MypostsContainer;