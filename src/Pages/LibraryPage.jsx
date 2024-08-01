import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";


export default function Library() {

    const [playlistName, setPlayListName] = useState('');
    const [playlist, setPlaylist] = useState([]);


    const { setName, id } = useContext(userContext);
    







    //Gets User Details From DB
    useEffect(() => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://player-backend.vercel.app/player/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result) {

                    setName(result.data.name)
                    setPlaylist(result.data.playlists);

                }
                else {
                    console.log("Error");
                }
            })

    }, [ playlist])



    //function to Create a playlistname
    function handleCreatePlaylist() {

        if (playlistName !== "") {

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "_id": id,
                "playlistname": playlistName
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://player-backend.vercel.app/player/playlist", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        console.log(result.msg);
                        console.log('Created Playlist');
                        setPlayListName('');
                    }
                    else {
                        console.log("Failed To Create");
                    }
                })
        }
    }

    return (
        <div className="librarypage h-screen w-[65vw]">
            <header className="flex relative w-full justify-center mt-[10px] ">
                <input
                    type="text"
                    placeholder="Create a Playlist"
                    value={playlistName}
                    onChange={(e) => setPlayListName(e.target.value)}
                    className="h-8 w-[300px] outline-none bg-transparent  rounded-lg p-1 border-[1px]"
                />
                <button className="h-[35px] ml-[20px] outline-none bg-[#10c5ad] text-black rounded-e-xl" onClick={handleCreatePlaylist}>Create Playlist</button>
            </header>



            <div className="playlist">
                <ol>
                    {
                        playlist.map((value, index) => {
                            return (
                                <div key={index} className="flex w-80 justify-around">
                                    <li>{value.playlistname}</li>
                                    <button>View</button>
                                    <button>Delete</button>
                                </div>
                            );
                        })
                    }
                </ol>
            </div>
        </div>
    );
}
