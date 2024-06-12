const HomePage = () => {
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


    ]

    const TRENDING = [
        {
            name: "Justin Biebr",
            song: "i'll Show You",
            pic: " artist-pic jb",
            rank: 1
        },
        {
            name: "Lana Del Ray",
            song: "Say Yes To Heaven",
            pic: " artist-pic lana",
            rank: 2
        },
        {
            name: "Kendrick Lamar",
            song: "Humble",
            pic: " artist-pic kdot",
            rank: 3
        },
        {
            name: "Selena Gomez",
            song: "Back To You",
            pic: " artist-pic selena",
            rank: 4
        }

    ]

    return (
        <div className="homepage">


            <div className="left-box">

                <div className="icon">
                    <i class="fa-solid fa-music"></i>
                </div>

                <div className="pages">

                    <i class="fa-solid fa-house"></i>
                    <i class="fa-solid fa-book-open"></i>
                    <i class="fa-solid fa-radio"></i>
                    <i class="fa-solid fa-music"></i>
                    <i class="fa-solid fa-microphone"></i>


                </div>

                <div className="profile">
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"></i>

                </div>


            </div>
            <div className="center-box">
                <div className="header">

                    <i class="fa-solid fa-chevron-left"></i>
                    <i class="fa-solid fa-chevron-right"></i>
                    <div className="input">
                        <i class="fa-solid fa-magnifying-glass"></i>

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


                    <h3>Artists</h3>

                    <div className="albums">

                        {
                            DETAILS.map((value, index) => {
                                return (
                                    <div className="artist-container">
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
                            <i class="fa-solid fa-play"></i>
                        </div>





                    </div>


                </div>
            </div>

            <div className="right-box">

                <div className="header">
                    <h3>Happy Listening !</h3>
                </div>



                <div className="trend-wrap">
                    <div className="trend-heading">

                        <h3>Trending Songs</h3>
                        <h3>Artist & Name</h3>
                        <h3>Rank</h3>
                    </div>
                    <div className="trending-songs">

                        {
                            TRENDING.map((value, index) => {
                                return (
                                    <div className="trend-songs">
                                        <div className={value.pic}></div>
                                        <div className="song-info">
                                            <p>{value.name}</p>
                                            <p>{value.song}</p>
                                        </div>
                                        <div className="rank">{value.rank}</div>
                                    </div>

                                );
                            })
                        }

                    </div>
                </div>


                <h3>Now Playing</h3>

                <div className="player">

                    <div className="pic"></div>
                    
                    <div className="song-details">

                        <div>
                            <p>Justin</p>
                            <p>Love Yourself</p>
                        </div>

                        <div className="icon">
                        <i class="fa-regular fa-heart"></i>

                        </div>



                    </div>


                </div>

            </div>

        </div>

    );
}

export default HomePage;