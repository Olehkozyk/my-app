import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'dfsadf'},
            {id: 2, message: 'sds'},
            {id: 3, message: '2'},
            {id: 4, message: 'dfs3313adf'},
            {id: 5, message: 'adada'},
        ],
        newPostText: 'it-kam'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Mila'},
            {id: 3, name: 'Oleh'},
            {id: 4, name: 'Poc'},
            {id: 5, name: 'ARa'},
        ],
        messages: [
            {id: 1, message: 'test1'},
            {id: 2, message: 'test2'},
            {id: 3, message: 'test3'},
            {id: 4, message: 'test4'},
            {id: 5, message: 'test5'},
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;