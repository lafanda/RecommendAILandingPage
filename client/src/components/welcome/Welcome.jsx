import React from 'react';
import DownloadButton from "../reusables/DownloadButton";
import "./WelcomeStyle.css"
import Phone from "../../images/phone.png"

function Welcome() {
    return (
        <section id={"Welcome"}>
            <div className={"container justify-content-center "}>

                <h1 className={"sHeading pb-5 text-center"}>Re-Discover What You Love With Personalized AI Recommendations</h1>
                <div className={"row text-center"}>
                    <div className={"col-md-6"}>
                        <DownloadButton brand='google-play'/>
                    </div>
                    <div className={"col-md-6"}>
                        <DownloadButton brand='apple'/>
                    </div>


                </div>

            </div>


        </section>
    );
}

export default Welcome;