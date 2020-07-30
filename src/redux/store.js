import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const UPDATE_NEW_MESS_BODY = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
    _state: {

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
            ],
            newMessageTextBody: "",
        },

    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
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