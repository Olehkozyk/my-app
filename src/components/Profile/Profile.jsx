import React, { Component }  from 'react';
import s from './Profile.module.css';
import Myposts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from "./MyPosts/MypostsContainer";
const Profile = (props) => {
    return (
        <div className={s.profile}>
            <h2>Profile</h2>
            <ProfileInfo />
            <MypostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;