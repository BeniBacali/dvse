import React from "react"
import photo from "../images/me.png"
import emailLogo from "../images/Mail.png"

export default function Header() {
    return (
        <div className="header">
            <img 
            src = {photo}
            alt = "Something"
            />
            <h1>Beni Bacali</h1>
            <h3>Frontend Developer (soon)</h3>
            <p>benibacali.website</p>
            <button>
            <img 
                src = {emailLogo}
                alt = "Something"
                />
                Email
            </button>
        </div>
        
    )
}