import React from "react";
import Pic from "./product/Pic";
import Text from "./product/Text";
import Profile from "./profile/Profile";

const Frame = ()=> {
    return (
        <div className="frame">
            <Pic source="./images/image-equilibrium.jpg" />
            <Text />
            <Profile />
        </div>
    );
}

export default Frame;