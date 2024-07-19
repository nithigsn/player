import musicAPI from "../Modules/musicAPI";

export default function JustinBieber({ setCenterBoxType }) {



    return (
        <div className="justin">
            <div className="header">
                <i className="fa-solid fa-chevron-left" onClick={() => setCenterBoxType('home')}></i>
                <i className="fa-solid fa-chevron-right"></i>
                <div className="input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for songs, artists etc" />
                </div>
            </div>

            {musicAPI.map((value, index) => (
                <div className="song" key={index} title='Play Justin Bieber Songs'>
                    <div className="song-pic">
                        <img src={value.songAvatar} alt="" />
                    </div>
                    <p>Justin Bieber</p>
                    <p>{value.songName}</p>
                    <div className="duration"></div>
                    <div className="play" >
                        <i className={`fas ${value.play ? "fa-regular fa-pause" : "fa-solid fa-play"}`}></i>
                    </div>
                </div>
            ))}
        </div>
    );
}
