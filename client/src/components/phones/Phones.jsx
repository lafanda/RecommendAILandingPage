import React from 'react';
import Phone1 from '../../images/phone1.png'
import Phone2 from '../../images/phone2.png'
import Phone3 from '../../images/phone3.png'
import './PhoneStyle.css'

function Phones() {
    return (
        <section className={"Phones"}>
            <h2 className={"phoneHeader text-center py-5"}>Personalized Recommendations Across All Mediums</h2>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <img className={"phoneS"} src={`${Phone2}`} alt=""/>
                    </div>
                    <div className={"col-md-4 "}>
                        <img className={"phoneM"} src={`${Phone1}`} alt=""/>
                    </div>
                    <div className={"col-md-4"}>
                        <img className={"phoneS"} src={`${Phone3}`} alt=""/>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Phones;