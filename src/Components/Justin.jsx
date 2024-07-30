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
                        <div key={index} className="flex justify-around "
                            onClick={() => handleSongClick(index)}>

                            <img src={song.songAvatar} alt="" className="h-10 w-10 rounded-sm " />


                            <p className="w-48">{song.songName}</p>
                            <p className="w-48">{song.songArtist}</p>

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
