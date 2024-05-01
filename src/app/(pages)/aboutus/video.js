import React from "react";

const AboutVideo = (props) => {
    return (
        <>
            {props.src !== '' ?
                <video className="video">
                    <source src={props.src} type="video/mp4" />
                </video>
                :
                <div className="fake-video"></div>
            }
        </>
    );
}

export default AboutVideo;