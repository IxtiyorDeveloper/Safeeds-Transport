import React from 'react';
import ReactPlayer from 'react-player'
import "./vd.scss"

function Vd(props) {
    return (
        <div className="vd pd">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                className="player"
            />
        </div>
    );
}

export default Vd;
