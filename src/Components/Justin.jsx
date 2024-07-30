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
        <div className="justin bg-black p-3 w-[65vw] h-[97vh]  ">

            <div className="justinpic h-[200px] w-full bg-jb bg-contain  flex flex-col justify-center">

                <p>Verified Artist</p>
                <h1 className="text-3xl">Justin Bieber</h1>
               



            </div>


            <div className=" flex flex-col gap-y-3 mt-6" >
                {
                    JBSONGS.map((song, index) => (
                        <div key={index} className="justinsong flex items-center justify-around  rounded   cursor-pointer hover:bg-[#1f241f7e]  "
                            onClick={() => handleSongClick(index)}>
                            <div className="photo">
                                <img src={song.songAvatar} alt="" className="h-10 w-10 rounded-sm" />
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

        </div>
    );
}
