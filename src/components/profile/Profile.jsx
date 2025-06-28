import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileInfo from "./ProfileInfo";

const Profile = ()=> {
    return(
        <div className="profile">
            <ProfilePic source="../images/image-avatar.png" />
            <ProfileInfo label="Creation of"  author="Jules Wyvern" />
        </div>
    )
}

export default Profile;