import React from 'react';
import "./s2.scss"
import { useMediaQuery } from 'react-responsive'

function S2({title, text, picture, order}) {

    const is300 = useMediaQuery({query: "(max-width: 1300px)"})

    return (
        <div className="cta">
            <div className={`bx ${is300 ? "" : "pd"}  ${order ? "str" : "opp"}`}>
                <div className="l1">
                    <div className="t1">
                        {title}
                    </div>
                    <div className="tx">
                        {text}
                    </div>

                </div>
                <div className="r1" style={{background: `url(${picture})`, backgroundPosition: "center",backgroundSize:"cover"}}>

                </div>
            </div>
        </div>
    );
}

export default S2;
