import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";

export default function Profile() {

    const { name, setName, id } = useContext(userContext);
    const [about, setAbout] = useState('');
    const [playlist, setPlaylist] = useState([]);




    useEffect(() => {


        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://player-backend.vercel.app/player/" + id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    setName(result.data.name);
                    setAbout(result.data.about);
                    setPlaylist(result.data.playlists);
                    console.log(result.data.playlists);
                    console.log(playlist)

                }
                else {
                    console.log("Error");
                }
            })


    }, [id, setName])


    return (
        <div className="profilepage h-screen w-[65vw]">



            <h1>Name : {name}</h1>
            <p>{about}</p>
            <h2>Playlists</h2>
            <ol>
            {
                playlist.map((value,index)=>{
                    return(
                        <div key={index}>
                            <li>{value.playlistname}</li>

                        </div>
                    );
                })
            }
            </ol>
        </div>
    );
}