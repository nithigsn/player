import { useState,useEffect } from "react";

export default function WelcomePage({ setPage }) {

    const [tab, setTab] = useState(() => {
        const savedTab = localStorage.getItem('tab');
        return savedTab || 'login';
      });
    
      // Save the state to localStorage whenever it changes
      useEffect(() => {
        localStorage.setItem('tab', tab);
      }, [tab]);


    function Login({ setPage, setTab }) {

        return (
            <div className="welcome">
                <div className="login">

                    <div className="login-left">

                        <h1>Hello People</h1>
                        <h3>Login and Enjoy Your Favourite Music's</h3>
                    </div>

                    <div className="login-right">
                        <div class="login-container">
                            <input placeholder="Enter Username" class="login-field" type="text" />
                            <label for="login-field" class="login-label">Enter Username</label>
                            <span class="login-highlight"></span>
                        </div>

                        <div class="login-container">
                            <input placeholder="Enter Password" class="login-field" type="text" />
                            <label for="login-field" class="login-label">Enter Password</label>
                            <span class="login-highlight"></span>
                        </div>

                        <div className="login-btn">
                            <button onClick={() => setPage('home')}>Login</button>
                            <button onClick={() => setTab('signup')}>Sign Up</button>
                        </div>
                    </div>


                </div>
            </div>
        );

    }

    function SignUp({ setPage, setTab }) {
        return (


            <div className="welcome">
                <div className="login">



                    <div className="login-right">
                        <div class="login-container">
                            <input placeholder="Enter Username" class="login-field" type="text" />
                            <label for="login-field" class="login-label">Enter Username</label>
                            <span class="login-highlight"></span>
                        </div>

                        <div class="login-container">
                            <input placeholder="Enter Password" class="login-field" type="text" />
                            <label for="login-field" class="login-label">Enter Password</label>
                            <span class="login-highlight"></span>
                        </div>


                        <div class="login-container">
                            <input placeholder="Confirm Password" class="login-field" type="text" />
                            <label for="login-field" class="login-label">Enter Password</label>
                            <span class="login-highlight"></span>
                        </div>

                        <div className="login-btn">
                            <button onClick={() => setPage('home')}>Sumbit</button>
                            <button onClick={() => setTab('login')}>Sign In</button>
                        </div>
                    </div>


                    <div className="login-left">

                        <h1>Hello People</h1>
                        <h3>Sign Up and Find Your Favourite Music</h3>

                    </div>


                </div>
            </div>


        );
    }


    switch (tab) {
        case 'login':
            return <Login setPage={setPage} setTab={setTab} />

        case 'signup':
            return <SignUp setPage={setPage} setTab={setTab} />

        default:
            return <Login />
    }
}