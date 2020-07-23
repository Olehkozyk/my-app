import React, { Component }  from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './DialogsMessage/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map ( d =>  <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.state.messages.map ( m =>   <Message message={m.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;