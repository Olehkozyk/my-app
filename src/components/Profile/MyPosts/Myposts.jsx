import React, { Component }  from 'react';
import Post from '../Post';

const Myposts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;