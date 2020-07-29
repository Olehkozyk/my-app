import React, { Component }  from 'react';
import s from './Profile.module.css';
import Myposts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className={s.profile}>
            <h2>Profile</h2>
            <ProfileInfo />
            <Myposts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;