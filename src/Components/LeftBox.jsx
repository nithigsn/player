import React from "react";
import { useNavigate } from "react-router-dom";

const LeftBox = ({ setCenterBoxType }) => {

    const navigate = useNavigate();



    function handleLogOut() {
        setCenterBoxType('home');
        navigate('/');

    }



    return (
        <div className="left-box flex  h-[87vh] w-[107px] bg-two ">

            <div className="flex flex-col items-center w-[107px] justify-around ">
                <i className="fas fa-music"></i>
                <i className="fas fa-home" title="Home" onClick={() => setCenterBoxType('home')}></i>
                <i className="fas fa-book-open" title="Library" onClick={() => setCenterBoxType('library')}></i>
                <i className="fas fa-radio" title="Radio"></i>
                <i className="fas fa-music" title="Search Music" onClick={() => setCenterBoxType('search')}></i>
                <i className="fa-solid fa-gear" title="Settings" onClick={() => setCenterBoxType('settings')}></i>
                <i className="fas fa-user" title="User" onClick={() => setCenterBoxType('profile')}></i>
                <i className="fas fa-arrow-right-from-bracket fa-flip-horizontal" onClick={handleLogOut}></i>
            </div>
        </div>
    );
}

export default LeftBox;
