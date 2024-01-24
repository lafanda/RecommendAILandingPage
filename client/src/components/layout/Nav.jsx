import React from 'react'
import "./LayoutStyle.css"
import Logo from "../../images/Logo.png"
import DownloadButton from '../reusables/DownloadButton'

function Nav() {
    return (
        <nav className="navbar">
            <a className="navbar-brand mx-3 d-flex align-items-center" href="#">
                <img src={`${Logo}`} width="50" height="50" className="d-inline-block align-top mr-2 logo" alt=""/>
                <h2 className="mb-0 ml-5 nav-title">RecommendAI</h2>
            </a>
        </nav>

    )
}

export default Nav