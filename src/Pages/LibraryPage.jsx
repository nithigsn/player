import { useState } from "react";

export default function Library() {

    const [playlistName, setPlayListName] = useState('');




    return (

        <div className="librarypage">

            <header>
                <input type="text" placeholder="Create a Playlist" value={playlistName} onChange={(e) => setPlayListName(e.target.value)} />
                <button>Create Playlist</button>
            </header>

            <div className="playlist">
              
              <p>Hello</p>

            </div>

            









        </div>
    );
}