import React, { useState } from 'react';
import musicAPI from '../Modules/musicAPI';

const SearchSongs = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDetails = searchTerm
        ? musicAPI.filter(detail => {
            const name = detail.songName ? detail.songName.toLowerCase() : '';
            const artist = detail.songArtist ? detail.songArtist.toLowerCase() : '';
            return name.includes(searchTerm.toLowerCase()) || artist.includes(searchTerm.toLowerCase());
        })
        : [];

    return (
        <div className=''>
            <input
                type="text"
                placeholder="Search for an artist or song..."
                value={searchTerm}
                onChange={handleSearch}
                className=''

            />
            {filteredDetails.map((value, index) => (
                <div className="" key={index}>
                    {/* <img src={value.songAvatar} alt={`${value.songArtist} avatar`} className="artist-avatar" /> */}
                    <h4>{value.songName}</h4>
                    <p>{value.songArtist}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchSongs;
