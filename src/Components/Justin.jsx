import musicAPI from "../Modules/musicAPI";
import { useMusic } from "../Context/MusicContext";

export default function Justin() {
    const { updateCurrentMusicDetails } = useMusic();

    const JBSONGS = musicAPI.filter(song => song.songArtist === 'Justin Bieber');

    const handleSongClick = (index) => {
        const globalIndex = musicAPI.findIndex(song => song === JBSONGS[index]);
        updateCurrentMusicDetails(globalIndex);
    };

    return (
        <div className="justin">
            {
                JBSONGS.map((song, index) => (
                    <div key={index} className="justinsong " onClick={() => handleSongClick(index)}>
                        <div className="photo">
                            <img src={song.songAvatar} alt="" />
                        </div>
                        <p>{song.songName}</p>
                        <p>{song.songArtist}</p>
                        <i className="fa-solid fa-ellipsis-vertical">

                            <div className="dropdown-content">
                                <p>Add To Playlist</p>
                            </div>
                        </i>
                       
                    </div>
                ))
            }

        </div>
    );
}
