import React, { Component }  from 'react';

const Post = (props) => {
    return (
        <div>
            Post Message : {props.message}
            Like: {props.likeCount}
        </div>
    )
}

export default Post;