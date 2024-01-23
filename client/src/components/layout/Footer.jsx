import React from 'react';
import Logo from "../../images/Logo.png"
import './LayoutStyle.css'

function Footer() {
    return (
        <footer className="mt-5 bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="d-flex align-items-center">
                            <img alt="Company Logo" height="45vh" src={`${Logo}`}/>
                            <h3 className=" ms-1 mb-0">RecommendAI</h3>
                        </div>
                        <p className={"FooterSub"}>Innovating How You Discover What You Love</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <p className={"Copywrite"}>(c) 2024 RecommendAI — All rights reserved</p>
                </div>
            </div>
</footer>

)
    ;
}

export default Footer;
