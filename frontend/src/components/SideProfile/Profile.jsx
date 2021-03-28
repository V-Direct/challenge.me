import React from "react"
import Button from "../Button/Button"
import "../../css/Profile.css"
import logo from "../../images/user.svg"

export default function Profile({
    
}) {
    return(
        <div className="Profile">
            <div>
            <img className="UserLogo" alt="profile" src={logo}></img>
            </div>
            <div>
            <Button className="SettingsButton" buttonText="Profile"></Button>
            </div>
            <div>
            <Button className="SettingsButton" buttonText="Challenges"></Button>
            </div>
            <div>
            <Button className="SettingsButton" buttonText="Settings"></Button>
            </div>
        </div>
    )
}