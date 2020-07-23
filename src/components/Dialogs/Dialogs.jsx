import React, { Component }  from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <div className={s.item + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.item}>
                    Sveta
                </div>
                <div className={s.item}>
                    Mila
                </div>
                <div className={s.item}>
                    Pisya
                </div>
                <div className={s.item}>
                    KRunta
                </div>
                <div className={s.item}>
                    OLegon
                </div>
                <div className={s.item}>
                    Shasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    1
                </div>
                <div className={s.message}>
                   2
                </div>
                <div className={s.message}>
                    3
                </div>
                <div className={s.message}>
                    4
                </div>
            </div>
        </div>
    )
}

export default Dialogs;