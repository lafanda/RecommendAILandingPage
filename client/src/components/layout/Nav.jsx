import React from 'react'
import "./LayoutStyle.css"
import Logo from "../../images/Logo.png"
import DownloadButton from '../reusables/DownloadButton'

function Nav() {
    return (
        <nav className="navbar">
            <a className="navbar-brand mx-3 d-flex align-items-center" href="#">
                <img src={`${Logo}`} width="66" height="65" className="d-inline-block align-top mr-2 logo" alt=""/>
                <h1 className="mb-0 ml-5 nav-title">RecommendAI</h1>
            </a>
        </nav>

    )
}

export default Nav