import React from 'react'
import "./LayoutStyle.css"
import Logo from "../../images/Logo.png"

function Nav() {
  return (
    <div>
      <div className="container">
    <header className="d-flex justify-content-between py-3">

      <ul className="nav nav-pills">

        <a className = "nav-item logo" href="/"><img className = "logo" src = {`${Logo}`}></img></a>
        <li className="nav-item navStyle"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" class="nav-link">Features</a></li>

      </ul>

    </header>
  </div>


    </div>
  )
}

export default Nav