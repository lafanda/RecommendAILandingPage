import React from 'react'
import "./LayoutStyle.css"
import Logo from "../../images/Logo.png"

function Nav() {
  return (
    <div>
      <div className="container">
    <header className="justify-content-between py-3">

      <ul className="nav nav-pills  justify-content-between">

        <a className = "nav-item" href="/"><img className = "logo col-lg-3 col-sm-3 col-3 rounded-5" src = {`${Logo}`}></img></a>
        <button className = "navStyle buttonStyle nav-link">Try Me</button>
    
      </ul>

    </header>
  </div>


    </div>
  )
}

export default Nav