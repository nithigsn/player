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
        <div className='h-screen w-[65vw] flex flex-col items-center'>
            <input
                type="text"
                placeholder="Search for an artist or song..."
                value={searchTerm}
                onChange={handleSearch}
                className='text-black mt-3 w-96 h-7 rounded-2xl p-4 active:outline-none active:border-none'

            />
            {filteredDetails.map((value, index) => (
                <div className=" w-[25vw]  flex mt-4 items-center justify-between " key={index} >
                    <div> <img src={value.songAvatar} alt={`${value.songArtist} avatar`} className="artist-avatar h-8 w-8" /></div>
                    <h4>{value.songName}</h4>
                    <p>{value.songArtist}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchSongs;
