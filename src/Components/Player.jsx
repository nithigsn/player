import { useMusic } from "../Context/MusicContext";
import musicAPI from "../Modules/musicAPI";

export default function Player() {
    const {
        currentMusicDetails,
        audioProgress,
        isAudioPlaying,
        musicTotalLength,
        musicCurrentTime,
        handleMusicProgressBar,
        handleAudioPlay,
        handleNextSong,
        handlePrevSong,
        currentAudio,
        handleAudioUpdate

    } = useMusic();

    return (

        <div className="h-[13vh] w-[100%] bg-black  fixed ml-[106px] text-white">

            <audio src={currentMusicDetails.songSrc} ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>

            <div className="flex">

                <img src={currentMusicDetails.songAvatar} alt="song Avatar" className="h-[13vh] " />
                <div className="h-[13vh] flex flex-col justify-center">
                    <p className=''>{currentMusicDetails.songName}</p>
                    <p className=''>{currentMusicDetails.songArtist}</p>
                </div>

                <div className="flex flex-col w-[40vw] ">
                    <div className="w-[40vw] text-center">
                        <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
                        <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
                        <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
                    </div>

                    <div className="flex justify-center">
                        <p className=''>{musicCurrentTime}</p>
                        <input type="range" name="musicProgressBar" className='w-[30vw]' value={audioProgress} onChange={handleMusicProgressBar} />
                        <p className=''>{musicTotalLength}</p>
                    </div>
                </div>


            </div>
        </div>


    );
}