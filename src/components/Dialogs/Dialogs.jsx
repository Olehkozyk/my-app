import React, { Component }  from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './DialogsMessage/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <DialogItem name='Dima' id='1' />
                <DialogItem name='Sveta' id='2' />
                <DialogItem name='Mila' id='3' />
                <DialogItem name='Pisya' id='4' />
                <DialogItem name='Shasha' id='5' />
                <DialogItem name='Valera' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='yo' />
                <Message message='hello' />
                <Message message='pisya' />
                <Message message='yo' />
                <Message message='sdsd' />
            </div>
        </div>
    )
}

export default Dialogs;