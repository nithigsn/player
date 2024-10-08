import React, { useState, useEffect } from 'react';
import Player from "../Components/RIghtBox";
import LeftBox from '../Components/LeftBox';
import Justin from "../Components/Justin";
import CenterBox from "../Components/CenterBox";
import Library from "./LibraryPage";
import SearchSongs from './SearchSongs';
import RightBox from '../Components/RIghtBox';
import ProfilePage from './ProfilePage';
import SettingPage from './SettingPage';

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
                return <ProfilePage setCenterBoxType={setCenterBoxType} />;
            case 'search':
                return <SearchSongs />;
            case 'settings':
                return <SettingPage />;
            default:
                return <CenterBox setCenterBoxType={setCenterBoxType} />;
        }
    };

    return (
        <div className="homepage flex h-[87vh] w-screen bg-black text-white ">
            <LeftBox setCenterBoxType={setCenterBoxType} />
            <CenterPage />
            <RightBox />
        </div>
    );
};

export default HomePage;
