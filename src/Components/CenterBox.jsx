export default function CenterBox({ setCenterBoxType }) {
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

    return (
        <div className="center-box p-[10px] w-[65vw] h-[97vh]  ">
            <div className="header flex items-center">

                <i className="fa-solid fa-chevron-left "></i>
                <i className="ml-4 fa-solid fa-chevron-right "></i>
                <div>
                    <h2 className="ml-5">Sonique Wave</h2>
                </div>
            </div>
            <div className="home-wrap flex flex-col items-center mt-5">
                <div className="info flex flex-col justify-around items-start h-[170px] w-[60vw] p-[20px] rounded ">
                    <h3>Artist Of The Month</h3>
                    <h2>Justin Bieber</h2>
                    <div className="info-btn">
                        <button>View Songs</button>
                        <button className="album ml-3">View Albums</button>
                    </div>
                </div>


                <h3 className="mt-5 mb-5">Artists & Albums</h3>

                <div className="albums flex justify-around gap-[10px] w-[60vw] items-center rounded">

                    {
                        DETAILS.map((value, index) => {
                            return (
                                <div className="artist-con h-[200px] w-[140px] flex flex-col items-center justify-center cursor-pointer "
                                    key={index}
                                    onClick={() => setCenterBoxType('justin')}>
                                    <div className={value.pic}>
                                    </div>
                                    <h4 className="mt-1">{value.name}</h4>
                                    <p>{value.album}</p>
                                </div>

                            );
                        })
                    }


                </div>
            </div>
        </div>
    );
}