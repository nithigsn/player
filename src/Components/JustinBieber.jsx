import React, { useState, useEffect } from "react";
import musicAPI from "../Modules/musicAPI";

export default function JustinBieber({ setPage }) {
    const [songs, setSongs] = useState(musicAPI.map(song => ({
        ...song,
        play: JSON.parse(localStorage.getItem(`play_${song.songId}`)) || false
    })));

    useEffect(() => {
        songs.forEach(song => {
            localStorage.setItem(`play_${song.songId}`, JSON.stringify(song.play));
        });
    }, [songs]);

    function handlePlay(index) {
        const updatedSongs = [...songs];
        updatedSongs[index] = {
            ...updatedSongs[index],
            play: !updatedSongs[index].play
        };
        setSongs(updatedSongs);
    }

    return (
        <div className="justin">
            <div className="header">
                <i className="fa-solid fa-chevron-left" onClick={() => setPage('home')}></i>
                <i className="fa-solid fa-chevron-right"></i>
                <div className="input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for songs, artists etc" />
                </div>
            </div>

            {songs.map((value, index) => (
                <div className="song" key={index} title='Play Justin Bieber Songs'>
                    <div className="song-pic">
                        <img src={value.songAvatar} alt="" />
                    </div>
                    <p>Justin Bieber</p>
                    <p>{value.songName}</p>
                    <div className="duration"></div>
                    <div className="play" onClick={() => handlePlay(index)}>
                        <i className={`fas ${value.play ? "fa-regular fa-pause" : "fa-solid fa-play"}`}></i>
                    </div>
                </div>
            ))}
        </div>
    );
}
