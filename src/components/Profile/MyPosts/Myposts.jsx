import React, { Component }  from 'react';
import Post from '../Post';

const Myposts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message='asdasd' likeCount='0' />
                <Post message='sdsd' likeCount='1' />
                <Post message='232' likeCount='343' />
            </div>
        </div>
    )
}

export default Myposts;