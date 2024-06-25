import React from "react";

const LeftBox = ({ setPage,setCenterBoxType }) => {
    return (
        <div className="left-box">
            
            <div className="icon">
                <i className="fas fa-music"></i> 
            </div>

            <div className="pages">
                <i className="fas fa-home" onClick={() => setCenterBoxType('home')}></i>
                <i className="fas fa-book-open" ></i>
                <i className="fas fa-radio" ></i>
                <i className="fas fa-music"></i>
                <i className="fas fa-microphone"></i>
            </div>

            <div className="profile">
                <i className="fas fa-user"></i>
                <i className="fas fa-arrow-right-from-bracket fa-flip-horizontal" onClick={() => setPage('welcome')}></i>
            </div>
        </div>
    );
}

export default LeftBox;
