'use client'
import React, { useState } from "react";

const AboutVideo = (props) => {
    const [link,setLink] = useState(props.src)
    return (
        <>
            {link === '' ?
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