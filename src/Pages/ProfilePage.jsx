import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";

export default function Profile() {

    const { name, setName, id } = useContext(userContext);
    const [playlist, setPlaylist] = useState();



    useEffect(() => {


        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:3434/player/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    setName(result.data.name)
                    setPlaylist(result.data.playlists);
                    console.log(result.data.playlists);

                }
                else {
                    console.log("Error");
                }
            })


    }, [id,setName])


    return (
        <div className="profilepage">



            <p>Name is : {name}</p>
            <h2>Playlist</h2>
            <ol>
          

            </ol>

        </div>
    );
}