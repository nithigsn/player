import React, { useState, useEffect } from "react";
import LeftBox from "../Components/LeftBox";
import CenterBox from "../Components/CenterBox";
import RightBox from "../Components/RIghtBox";
import JustinBieber from "../Components/JustinBieber";

const HomePage = ({ setPage }) => {
    // Retrieve initial centerBoxType from localStorage or default to 'home'
    const [centerBoxType, setCenterBoxType] = useState(() => {
        const storedCenterBoxType = localStorage.getItem('centerBoxType');
        return storedCenterBoxType ? storedCenterBoxType : 'home';
    });

    // Update localStorage whenever `centerBoxType` changes
    useEffect(() => {
        localStorage.setItem('centerBoxType', centerBoxType);
    }, [centerBoxType]);

    // Switch case to determine which CenterBox component to render
    const renderCenterBox = () => {
        switch (centerBoxType) {
            case 'home':
                return <CenterBox setPage={setPage} setCenterBoxType={setCenterBoxType} />;
            case 'justin':
                return <JustinBieber setPage={setPage} setCenterBoxType={setCenterBoxType} />;
            default:
                return <CenterBox setPage={setPage} />; // Default to CenterBox if no match
        }
    }

    return (
        <div className="homepage">
            <LeftBox setPage={setPage} setCenterBoxType={setCenterBoxType} />
            {renderCenterBox()}
           <RightBox/>
        </div>
    );
}

export default HomePage;
