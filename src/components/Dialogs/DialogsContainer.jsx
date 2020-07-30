import React, { Component }  from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './DialogsMessage/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map ( d =>  <DialogItem name={d.name} id={d.id} />);
    let messageElements = state.messages.map ( m =>   <Message message={m.message} />);
    let newMessageBody = state.newMessageTextBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
       <Dialogs sendMessClick={onSendMessageClick} updNewMessBody={onMessageChange} dialogsPage={state} />
    )
}

export default DialogsContainer;