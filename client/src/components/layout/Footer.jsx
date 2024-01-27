import React from 'react';
import Logo from "../../images/Logo.png"
import './LayoutStyle.css'

function Footer() {
    return (
        <footer className="mt-5 bg-dark text-light py-3 px-4">
            <div className=".container-fluid">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="d-flex align-items-center">
                            <img alt="Company Logo" height="45vh" src={`${Logo}`}/>
                            <h3 className=" ms-1 mb-0 pb-2">RecommendAI</h3>
                        </div>
                        <h5 className={"FooterSub"}>Innovating How You Discover What You Love</h5>
                    </div>
                </div>
                <div className="text-center pt-4">
                    <h5 className={"Copywrite"}>(c) 2024 RecommendAI — All rights reserved</h5>
                </div>
            </div>
</footer>

)
    ;
}

export default Footer;
