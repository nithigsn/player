

export default function WelcomePage({setPage}) {
    return (

        <div className="welcome">

            <div className="welcome-container">


                <div className="box">
                    <div className="home-head">
                        <div>
                            Icon
                        </div>

                        <div>Electrify</div></div>
                    <div className="inner-box">
                        <h2>Discover and Share Your Favourite Music</h2>
                    </div>
                    <div className="inner-box">
                        <button onClick={()=>setPage('home')}>Login</button>
                        <button>Sign Up</button></div>
                </div>

                <div className="welcome-img">
                    <div className="img-box">


                    </div>
                </div>
            </div>



            <div>

            </div>

        </div>

    );
}