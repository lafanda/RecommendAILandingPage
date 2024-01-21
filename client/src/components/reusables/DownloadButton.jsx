import React from 'react';

function DownloadButton(props) {
    return (
        <section>
            <div className="download-buttons">
                <button className={`download-btn ${props.brand}`}><i className={`fa-brands fa-${props.brand}`}></i> Download</button>
            </div>
        </section>
    );
}

export default DownloadButton;