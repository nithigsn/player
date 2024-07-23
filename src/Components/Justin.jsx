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
                    <div key={index} className="jb" onClick={() => handleSongClick(index)}>
                        <p>{song.songName}</p>
                        <p>{song.songArtist}</p>
                    </div>
                ))
            }
        </div>
    );
}
