import React from 'react';
import DownloadButton from "../reusables/DownloadButton";
import "./WelcomeStyle.css"

function Welcome() {
    return (
        <section id={"Welcome"}  className={"text-bg-dark"}>
            <div className={"container justify-content-center "}>
                <h1 className={"text-center"}>RecommendAI</h1>
                <p className={"subHeading text-center pb-5"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                <div className={"row"}>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                        <DownloadButton brand='google-play'/>
                    </div>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                        <DownloadButton brand='apple'/>
                    </div>

                </div>
            </div>


        </section>
    );
}

export default Welcome;