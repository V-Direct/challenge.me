import React from "react"
import ProfileLabel from "../Labels/ProfileLabel.jsx"
import NameLabel from "../Labels/NameLabel.jsx"
import Button from "../Button/Button"
import "../../css/Profile.css"
import logo from "../../images/user.svg"

export default function Profile({

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
        <div className="Profile">
            <div>
            <img className="UserLogo" alt="profile" src={logo}></img>
            </div>
            <NameLabel className="NameLabel" username="Yatotoast" />
            <ProfileLabel divClassname="LabelMarg" className="ProfLabel" content="Profile" link="login"></ProfileLabel>
            <ProfileLabel divClassname="LabelMarg" className="ProfLabel" content="Settings" link="login"></ProfileLabel>
            <ProfileLabel divClassname="LabelMarg" className="ProfLabel" content="More" link="contact"></ProfileLabel>
        </div>
    )
}