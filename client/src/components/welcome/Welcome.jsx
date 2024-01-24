import React from 'react';
import DownloadButton from "../reusables/DownloadButton";
import "./WelcomeStyle.css"
import Phone from "../../images/phone.png"

function Welcome() {
    return (
        <section id={"Welcome"}>
            <div className={"container justify-content-center "}>
                <div className={"row"}>
                    <div className={'col-md-6'}>
                        <h1 className={"sHeading pb-5 "}>Re-Discover What You Love With Personalized AI Recommendations</h1>
                        <DownloadButton brand='google-play'/>
                        <DownloadButton brand='apple'/>
                    </div>
                    <div className={" col-md-6"}>
                        <img className=" phone" src={`${Phone}`} alt=""/>
                    </div>
                </div>

            </div>


        </section>
    );
}

export default Welcome;