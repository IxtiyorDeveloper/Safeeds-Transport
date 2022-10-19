import React from 'react';
import "./call.scss"

function Call(props) {
    return (
        <div className="lock">
            <div className="tit">
                Lock in Your Price Today
            </div>
            <div className="card">
                <div className="f1">
                    <div className="text">Talk to an auto <br/> transport <br/> expert now!</div>
                    <div className="img">
                        <img
                            src="https://s3.amazonaws.com/sherpaautotransport-media/wp-content/uploads/2020/04/14143800/call-optimized.jpg"
                            alt="img"/>
                    </div>
                </div>
                <a href="tel:3153144337" className="f2">CALL NOW: 315-314-4337</a>
            </div>
        </div>
    );
}

export default Call;
