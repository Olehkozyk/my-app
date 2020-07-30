import React, { Component }  from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './DialogsMessage/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
debugger;
    let dialogsElements = state.state.dialogs.map ( d =>  <DialogItem name={d.name} id={d.id} />);
    let messageElements = state.state.messages.map ( m =>   <Message message={m.message} />);
    let newMessageBody = state.state.newMessageTextBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea value={newMessageBody}
                               onChange={onMessageChange}
                               placeholder='Enter your message'></textarea>
                </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;