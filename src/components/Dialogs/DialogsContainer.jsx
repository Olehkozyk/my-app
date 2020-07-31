import React  from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs sendMessClick={onSendMessageClick}
                                updNewMessBody={onMessageChange}
                                dialogsPage={store.getState().dialogsPage} />
            }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer;