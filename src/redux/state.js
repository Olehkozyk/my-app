
let store = {
    _state : {
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
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
    _callSubscriber() {
        console.log('state-achnge');
    },
    subscribe(observer) {
        this._callSubscriber = observer; //Patern watcher observer
    }
}

export default store;
window.store = store;
//store - OOP