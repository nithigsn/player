export default function CenterBox({setCenterBoxType}){
    const DETAILS = [
        {
            name: "Justin Biebr",
            album: "Purpose",
            pic: " artist-pic jb"
        },
        {
            name: "Lana Del Ray",
            album: "Say Yes To Heaven",
            pic: " artist-pic lana"
        },
        {
            name: "Kendrick Lamar",
            album: "Humble",
            pic: " artist-pic kdot"
        },
        {
            name: "Selena Gomez",
            album: "Back To You",
            pic: " artist-pic selena"
        },
        {
            name: "Drake",
            album: "God's Plan",
            pic: " artist-pic drake"
        }


    ];

    return(
        <div className="center-box">
        <div className="header">

            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <div className="input">
                <i className="fa-solid fa-magnifying-glass"></i>

                <input type="text" placeholder="Search for songs, artists etc" />

            </div>
        </div>
        <div className="home-wrap">
            <div className="info">
                <h3>Artist Of The Month</h3>
                <h2>Justin Bieber</h2>
                <div className="info-btn">
                    <button>View Songs</button>
                    <button className="album">View Albums</button>
                </div>
            </div>


            <h3>Artists & Albums</h3>

            <div className="albums">

                {
                    DETAILS.map((value,index) => {
                        return (
                            <div className="artist-container" key={index} onClick={()=>setCenterBoxType('justin')}>
                                <div className={value.pic}>
                                </div>
                                <h4>{value.name}</h4>
                                <p>{value.album}</p>
                            </div>

                        );
                    })
                }


            </div>


            <h3>You Might Like This</h3>
            <div className="song">
                <div className="song-pic">

                </div>
                <p>Justin Bieber</p>
                <p>Company</p>
                <div className="duration">03.22</div>
                <div className="play">
                    <i className="fa-solid fa-play"></i>
                </div>

            </div>


        </div>
    </div>
    );
}