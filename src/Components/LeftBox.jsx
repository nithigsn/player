import React from "react";

const LeftBox = ({ setPage }) => {
    return (
        <div className="left-box">
            <div className="icon">
                <i className="fas fa-music"></i> 
            </div>

            <div className="pages">
                <i className="fas fa-home" onClick={() => setPage('home')}></i>
                <i className="fas fa-book-open" onClick={() => setPage('justin')}></i>
                <i className="fas fa-radio" onClick={() => setPage('radio')}></i>
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
