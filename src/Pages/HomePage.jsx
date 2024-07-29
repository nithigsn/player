import React, { useState, useEffect } from 'react';
import Player from "../Components/Player";
import LeftBox from '../Components/LeftBox';
import Justin from "../Components/Justin";
import CenterBox from "../Components/CenterBox";
import Library from "./LibraryPage";
import Profile from "./ProfilePage";
import SearchSongs from './SearchSongs';

const HomePage = () => {
    const [centerBoxType, setCenterBoxType] = useState(() => {
        const savedType = localStorage.getItem('centerBoxType');
        return savedType ? savedType : 'home';
    });

    useEffect(() => {
        localStorage.setItem('centerBoxType', centerBoxType);
    }, [centerBoxType]);

    const CenterPage = () => {
        switch (centerBoxType) {
            case 'home':
                return <CenterBox setCenterBoxType={setCenterBoxType} />;
            case 'justin':
                return <Justin setCenterBoxType={setCenterBoxType} />;
            case 'library':
                return <Library setCenterBoxType={setCenterBoxType} />;
            case 'profile':
                return <Profile setCenterBoxType={setCenterBoxType} />;
            case 'search':
                return <SearchSongs />
            default:
                return <CenterBox setCenterBoxType={setCenterBoxType} />;
        }
    };

    return (
        <div className="homepage flex h-full w-screen bg-black text-white ">
            <LeftBox setCenterBoxType={setCenterBoxType} />
            <CenterPage />
            <Player />
        </div>
    );
};

export default HomePage;
