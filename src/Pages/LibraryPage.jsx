import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";


export default function Library() {
    const [playlistName, setPlayListName] = useState('');
    const [playlist, setPlaylist] = useState([]);


    const { name, setName,id } = useContext(userContext);

    console.log(id);

    //Gets User Details From DB
    useEffect(() => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:3434/player/"+id, requestOptions)
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

    }, [])


  
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

            fetch("http://localhost:3434/player/playlist", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        console.log(result.msg);
                        console.log('Created Playlist');
                    }
                    else {
                        console.log("Failed To Create");
                    }
                })
        }
    }

    return (
        <div className="librarypage">
            <header>
                <input
                    type="text"
                    placeholder="Create a Playlist"
                    value={playlistName}
                    onChange={(e) => setPlayListName(e.target.value)}
                />
                <button onClick={handleCreatePlaylist}>Create Playlist</button>
            </header>



            <div className="playlist">
                <ol>
                    {
                        playlist.map((value, index) => {
                            return (
                                <div key={index} className="playlist-li">
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
