const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'dfsadf'},
        {id: 2, message: 'sds'},
        {id: 3, message: '2'},
        {id: 4, message: 'dfs3313adf'},
        {id: 5, message: 'adada'},
    ],
    newPostText: 'it-kam'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default: {
            return state;
        }
    }
}

export const addPostAction = () => ({type: 'ADD-POST'});
export const updatePost = (text) => ({type: 'UPDATE-POST', newText: text});

export default profileReducer;