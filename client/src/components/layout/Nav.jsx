import React from 'react'
import "./LayoutStyle.css"
import Logo from "../../images/Logo.png"

function Nav() {
    return (
        <nav className="navbar">
            <a className="navbar-brand mx-4 d-flex align-items-center" href="/">
                <img src={`${Logo}`} width="66" height="65" className="d-inline-block align-top mr-2 logo" alt="icon"/>
                <h1 className="mb-0 ml-5 nav-title">RecommendAI</h1>
            </a>
        </nav>
)
}

export default Nav