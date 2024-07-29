import React from "react";
import { useNavigate } from "react-router-dom";

const LeftBox = ({ setCenterBoxType }) => {

    const navigate = useNavigate();



    function handleLogOut() {
        setCenterBoxType('home');
        navigate('/');

    }



    return (
        <div className="left-box flex flex-col h-screen w-[107px] ">
            <div className="flex-1 flex items-center justify-center">
                <i className="fas fa-music"></i>
            </div>

            <div className="pages flex flex-col  h-[424.23px] justify-around items-center">
                <i className="fas fa-home" title="Home" onClick={() => setCenterBoxType('home')}></i>
                <i className="fas fa-book-open" title="Library" onClick={() => setCenterBoxType('library')}></i>
                <i className="fas fa-radio" title="Radio"></i>
                <i className="fas fa-music" title="Search Music" onClick={() => setCenterBoxType('search')}></i>
                <i className="fa-solid fa-gear" title="Settings" onClick={()=>setCenterBoxType('settings')}></i>
            </div>

            <div className="profile flex flex-col justify-evenly items-center h-[212.11px]">
                <i className="fas fa-user" title="User" onClick={() => setCenterBoxType('profile')}></i>
                <i className="fas fa-arrow-right-from-bracket fa-flip-horizontal" onClick={handleLogOut}></i>
            </div>
        </div>
    );
}

export default LeftBox;
