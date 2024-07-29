import { useMusic } from '../Context/MusicContext';

import musicAPI from '../Modules/musicAPI';

function RightBox() {

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
        handleAudioUpdate,
        updateCurrentMusicDetails

    } = useMusic();

    return (
        <div className="right-box h-screen w-[28vw] flex flex-col items-center bg-[#212121]">
            <div className="trend-wrap flex flex-col items-center justify-center">
                <div className="trend-heading">
                    <h3 className='mt-3 mb-3'>Trending Songs</h3>
                </div>
                <div className="trending-songs h-[270px] p-[10px] bg-black rounded-lg text-center">
                    {
                        musicAPI.slice(0, 4).map((value, index) => (
                            <div className="trend-songs"
                                key={index}
                                onClick={() => updateCurrentMusicDetails(index)}>
                                <div className="photo">
                                    <img className='h-[40px] w-[40px] rounded-full' src={value.songAvatar} alt="" />
                                </div>
                                <div className="song-info">
                                    <p>{value.songArtist}</p>
                                    <p>{value.songName}</p>
                                </div>
                                <div className="rank">
                                    <p>{value.songRanks}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container h-2/4 w-[28vw] flex justify-center items-center ">
                <audio src={currentMusicDetails.songSrc} ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
                <div className="music-Container">
                    <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
                    <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
                    <img src={currentMusicDetails.songAvatar} alt="song Avatar" id='songAvatar' />
                    <div className="musicTimerDiv">
                        <p className='musicCurrentTime'>{musicCurrentTime}</p>
                        <p className='musicTotalLenght'>{musicTotalLength}</p>
                    </div>
                    <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
                    <div className="musicControlers">
                        <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
                        <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
                        <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
                    </div>
                </div>
            </div>


{/* 
            <div className="h-[13vh] w-[100%] bg-black  fixed  bottom-0 text-white">

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
            </div> */}




        </div>
    );
}

export default RightBox;
