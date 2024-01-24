import React from 'react';
import Phone from '../../images/testphone.png'
import './PhoneStyle.css'

function Phones() {
    return (
        <section className={"Phones"}>
            <h2 className={"phoneHeader text-center py-5"}>Personalized Recommendations Across All Mediums</h2>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <img className={"phoneS"} src={`${Phone}`} alt=""/>
                    </div>
                    <div className={"col-md-4 "}>
                        <img className={"phoneM"} src={`${Phone}`} alt=""/>
                    </div>
                    <div className={"col-md-4"}>
                        <img className={"phoneS"} src={`${Phone}`} alt=""/>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Phones;