import React, { Component }  from 'react';
import Post from '../Post';
import {addPostAction, updatePost} from "../../../redux/state";

const Myposts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostAction());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePost(text));
    }
    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;