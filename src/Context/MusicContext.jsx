import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import musicAPI from '../Modules/musicAPI';

const MusicContext = createContext();

export function MusicProvider({ children }) {
    const [currentMusicDetails, setCurrentMusicDetails] = useState(() => {
        const savedMusicDetails = localStorage.getItem('currentMusicDetails');
        return savedMusicDetails ? JSON.parse(savedMusicDetails) : {
            songName: 'Chasing',
            songArtist: 'NEFFEX',
            songSrc: './Assets/songs/Chasing - NEFFEX.mp3',
            songAvatar: './Assets/Images/image1.jpg'
        };
    });
    
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(() => {
        const savedMusicIndex = localStorage.getItem('musicIndex');
        return savedMusicIndex ? JSON.parse(savedMusicIndex) : 0;
    });
    const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
    const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');

    const currentAudio = useRef(null);

    const handleAudioUpdate = useCallback(() => {
        if (currentAudio.current) {
            const duration = currentAudio.current.duration;
            const currentTime = currentAudio.current.currentTime;

            if (!isNaN(duration) && duration > 0) {
                const minutes = Math.floor(duration / 60);
                const seconds = Math.floor(duration % 60);
                setMusicTotalLength(`${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`);

                const currentMin = Math.floor(currentTime / 60);
                const currentSec = Math.floor(currentTime % 60);
                setMusicCurrentTime(`${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`);

                const progress = (currentTime / duration) * 100;
                setAudioProgress(isNaN(progress) ? 0 : progress);
            }
        }
    }, []);

    const handleNextSong = useCallback(() => {
        const nextIndex = (musicIndex + 1) % musicAPI.length;
        updateCurrentMusicDetails(nextIndex);
    }, [musicIndex]);

    const handlePrevSong = useCallback(() => {
        const prevIndex = (musicIndex - 1 + musicAPI.length) % musicAPI.length;
        updateCurrentMusicDetails(prevIndex);
    }, [musicIndex]);

    useEffect(() => {
        const audioElement = currentAudio.current;

        if (audioElement) {
            audioElement.addEventListener('timeupdate', handleAudioUpdate);
            audioElement.addEventListener('ended', handleNextSong);
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener('timeupdate', handleAudioUpdate);
                audioElement.removeEventListener('ended', handleNextSong);
            }
        };
    }, [handleAudioUpdate, handleNextSong]);

    useEffect(() => {
        localStorage.setItem('currentMusicDetails', JSON.stringify(currentMusicDetails));
    }, [currentMusicDetails]);

    useEffect(() => {
        localStorage.setItem('musicIndex', JSON.stringify(musicIndex));
    }, [musicIndex]);

    const handleMusicProgressBar = (e) => {
        const newProgress = e.target.value;
        setAudioProgress(newProgress);

        if (currentAudio.current) {
            const duration = currentAudio.current.duration;
            if (!isNaN(duration) && duration > 0) {
                currentAudio.current.currentTime = (newProgress * duration) / 100;
            }
        }
    };

    const handleAudioPlay = () => {
        if (currentAudio.current) {
            if (currentAudio.current.paused) {
                currentAudio.current.play().catch((error) => console.error('Play error:', error));
                setIsAudioPlaying(true);
            } else {
                currentAudio.current.pause();
                setIsAudioPlaying(false);
            }
        }
    };

    const updateCurrentMusicDetails = (index) => {
        const musicObject = musicAPI[index];
        setCurrentMusicDetails(musicObject);
        setMusicIndex(index);

        if (currentAudio.current) {
            const audioElement = currentAudio.current;
            audioElement.src = musicObject.songSrc;

            const handleCanPlayThrough = () => {
                audioElement.play().catch((error) => console.error('Play error:', error));
                audioElement.removeEventListener('canplaythrough', handleCanPlayThrough);
            };

            audioElement.addEventListener('canplaythrough', handleCanPlayThrough);
            audioElement.load();
        }

        setIsAudioPlaying(true);
    };

    return (
        <MusicContext.Provider value={{
            currentMusicDetails,
            audioProgress,
            isAudioPlaying,
            musicTotalLength,
            musicCurrentTime,
            handleMusicProgressBar,
            handleAudioPlay,
            handleNextSong,
            handlePrevSong,
            updateCurrentMusicDetails,
            currentAudio,
            handleAudioUpdate
        }}>
            {children}
            <audio ref={currentAudio} />
        </MusicContext.Provider>
    );
}

export const useMusic = () => useContext(MusicContext);
