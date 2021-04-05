import React from "react"
import ProfileLabel from "../Labels/ProfileLabel.jsx"
import NameLabel from "../Labels/NameLabel.jsx"
import Button from "../Button/Button"
import "../../css/Profile.css"
import logo from "../../images/user.svg"
import logo2 from "../../images/user2.svg"
import logo3 from "../../images/dot.png"
import logo4 from "../../images/logout.png"
import logo5 from "../../images/setting.png"

export default function Profile({
    classname
   /*
               <div>
            <Button className="SettingsButton" buttonText="Profile"></Button>
            </div>
            <div>
            <Button className="SettingsButton" buttonText="Challenges"></Button>
            </div>
            <div>
            <Button className="SettingsButton" buttonText="Settings"></Button>
            </div>
   */ 
}) {
    return(
        <div className={classname+" Profile"}>
            <div>
            <img className="UserLogo" alt="profile" src={logo}></img>
            </div>
            <NameLabel className="NameLabel" username={localStorage.getItem("username")} />
            <ProfileLabel divClassname="LabelMarg" className="ProfLabel" content={
            <div>Profile <img className="labelIcons" alt="profile" src={logo2}></img></div>} link="login"></ProfileLabel>
            <ProfileLabel divClassname="LabelMarg" className="ProfLabel"  content={
            <div>Settings <img className="labelIconsSetting" alt="profile" src={logo5}></img></div>} link="login"></ProfileLabel>
            <ProfileLabel divClassname="LabelMarg" className="ProfLabel" content={
            <div>More <img className="labelIconsDot" alt="profile" src={logo3}></img></div>} link="contact"></ProfileLabel>
            <ProfileLabel divClassname="LabelMarg" className="ProfLabel" content={
            <div>Logout <img className="labelIconsLogout" alt="profile" src={logo4}></img></div>} link="logout"></ProfileLabel>
        </div>
    )
}