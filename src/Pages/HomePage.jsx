const HomePage = () => {
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

                    <div className="albums">

                    </div>

                    <div className="songs">

                    </div>


                </div>
            </div>

            <div className="right-box">

                <div className="header">

                </div>


                <div className="trending-arrtists">


                </div>

                <div className="player">


                </div>

            </div>
        </div>
    );
}

export default HomePage;