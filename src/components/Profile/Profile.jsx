import React  from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from "./MyPosts/MypostsContainer";
const Profile = () => {
    return (
        <div className={s.profile}>
            <h2>Profile</h2>
            <ProfileInfo />
            <MypostsContainer/>
        </div>
    )
}

export default Profile;