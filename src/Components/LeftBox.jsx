import React from "react";
import { useNavigate } from "react-router-dom";

const LeftBox = ({ setCenterBoxType }) => {
    const navigate = useNavigate();


    return (
        <div className="left-box">

            <div className="icon">
                <i className="fas fa-music"></i>
            </div>

            <div className="pages">
                <i className="fas fa-home" title="Home" onClick={() => setCenterBoxType('home')}></i>
                <i className="fas fa-book-open" title="Library" onClick={()=>setCenterBoxType('library')}></i>
                <i className="fas fa-radio" title="Radio"></i>
                <i className="fas fa-music" title="Search Music"></i>
                <i className="fas fa-microphone"></i>
            </div>

            <div className="profile">
                <i className="fas fa-user" title="User" onClick={() => setCenterBoxType('profile')}></i>
                <i className="fas fa-arrow-right-from-bracket fa-flip-horizontal" onClick={() => navigate('/')}></i>
            </div>
        </div>
    );
}

export default LeftBox;
