import React, { Component }  from 'react';
import Post from '../Post';

const Myposts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>);
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;