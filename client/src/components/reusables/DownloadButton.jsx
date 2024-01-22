import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReusablesStyle.css'

library.add( fab);
function DownloadButton(props) {

    return (
        <section>
            <div className="download-buttons">
                <button className={`download-btn ${props.brand}`}> <FontAwesomeIcon icon={['fab', `${props.brand}`]} /> Download </button>
            </div>
        </section>
    );
}

export default DownloadButton;