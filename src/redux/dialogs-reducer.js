
const UPDATE_NEW_MESS_BODY = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESS_BODY:
            state.newMessageTextBody = action.body;
            return state;
        case SEND_MESSAGE :
            let body = state.newMessageTextBody;
            state.newMessageTextBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESS_BODY, body: body});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;