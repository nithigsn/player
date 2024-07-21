import { useContext, useState } from "react";
import { userContext } from "../App";

export default function Library(id) {

    const [playlistName, setPlayListName] = useState('');

   
    console.log(id);
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
                        alert(id, "Created Name");
                    }
                    else {
                        alert('Fail')
                    }
                })
        }
    }




    return (

        <div className="librarypage">

            <header>
                <input type="text"
                    placeholder="Create a Playlist"
                    value={playlistName}
                    onChange={(e) => setPlayListName(e.target.value)} />
                <button onClick={handleCreatePlaylist}>Create Playlist</button>
            </header>

            <div className="playlist">

                <p>Hello</p>

            </div>











        </div>
    );
}