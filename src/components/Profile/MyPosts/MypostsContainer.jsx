import React from 'react';
import {addPostAction, updatePost} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(updatePost(text))},
        addPost: () => {dispatch(addPostAction())}
    }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;