import React from "react"
import Twitter from "../images/Twitter.png"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Linkedin from "../images/Linkedin.png"
import GitHub from "../images/GitHub.png"

export default function Footer() {
    return (
        <div className="footer">
            <img 
            src = {Twitter}
            alt = "Twitter"
            className="logo"
            />
            <img 
            src = {Facebook}
            alt = "Facebook"
            className="logo"
            />
            <img 
            src = {Instagram}
            alt = "Instagram"
            className="logo"
            />
            <img 
            src = {Linkedin}
            alt = "Linkedin"
            className="logo"
            />
            <img 
            src = {GitHub}
            alt = "GitHub"
            className="logo"
            />
        </div>
    )
}