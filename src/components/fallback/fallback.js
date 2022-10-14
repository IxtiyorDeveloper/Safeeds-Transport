import React from 'react';
import "./fallback.scss"
import Typewriter from 'typewriter-effect';

function Fallback(props) {
    return (
        <div className="fallback">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Safeeds Transport Inc')
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
            />
        </div>
    );
}

export default Fallback;