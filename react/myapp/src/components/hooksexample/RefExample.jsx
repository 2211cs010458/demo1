import React, { useEffect, useRef, useState } from 'react';
import VIDEO from './video.mp4';

const RefExample = () => {
    const [play, setPlay] = useState(true);
    const eleRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        eleRef.current.style.color = "crimson";
        eleRef.current.innerText = "React Ref";
    }, []); // Adding dependency array to avoid infinite re-renders

    const playORpause = () => {
        if (play) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setPlay(!play);
    };

    return (
        <div>
            <h1 ref={eleRef}>RefExample</h1>
            <video src={VIDEO} ref={videoRef} onClick={playORpause} width="500" controls></video>
        </div>
    );
};

export default RefExample;