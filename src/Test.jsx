import { useState, useEffect } from "react";

export default function Test() {
    const [play, setPlay] = useState(JSON.parse(localStorage.getItem('play')) || "fa-solid fa-play");

    useEffect(() => {
        localStorage.setItem('play', JSON.stringify(play));
    }, [play]);

    function handlePlay() {
        if (play === "fa-solid fa-play") {
            setPlay("fa-regular fa-pause"); // Switch to pause icon
        } else {
            setPlay("fa-solid fa-play"); // Switch to play icon
        }
    }

    return (
        <div onClick={handlePlay}>
            <i className={`fas ${play}`}></i>
        </div>
    );
}
