import React  from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <h2>ProfileInfo</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3gOfZwbfKc6rdP8DNdHnS9GwFBRMO72vJaQ&usqp=CAU" alt=""/>
            <div className={s.description}>
                Info Profile
            </div>
       </div>
    )
}

export default ProfileInfo;