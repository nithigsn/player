import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";

export default function Profile() {

    const{name,setName,id}=useContext(userContext);
    const[playlist,setPlaylist]=useState('');


    useEffect(() => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:3434/player/" +id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result.status){
                    console.log(result);
                    setName(result.data.name);
                    setPlaylist(result.data.playlists.playlist)

                }
                else{
                    alert('error');
                }
            })
                

    }, [])


    return (
        <div className="profilepage">



            <p>Name is : {name}</p>
            <h2>Playlis</h2>
            <ol>
                <li>{playlist}</li>
            </ol>

        </div>
    );
}