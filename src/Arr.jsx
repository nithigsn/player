import React, { useState } from 'react';
import './App.css'; // Make sure to include your CSS for styling

const Arr = () => {
    const DETAILS = [
        {
            name: "Justin Bieber",
            song: "Lovely",
            pic: "artist-pic jb"
        },
        {
            name: "Lana Del Rey",
            song: "Say Yes To Heaven",
            pic: "artist-pic lana"
        },
        {
            name: "Kendrick Lamar",
            song: "Humble",
            pic: "artist-pic kdot"
        },
        {
            name: "Selena Gomez",
            song: "Back To You",
            pic: "artist-pic selena"
        },
        {
            name: "Drake",
            song: "God's Plan",
            pic: "artist-pic drake"
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDetails = DETAILS.filter(detail =>
        detail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        detail.song.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search for an artist or song..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredDetails.map((value, index) => (
                <div className="artist-container" key={index}>
                    <div className={value.pic}></div>
                    <h4>{value.name}</h4>
                    <p>{value.song}</p>
                </div>
            ))}
        </div>
    );
};

export default Arr;
