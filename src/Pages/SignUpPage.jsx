import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export default function SignUp() {

    const navigate = useNavigate();

    const {
        name,
        setName,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        setId } = useContext(userContext);


    function handleSignUp() {

        if(password === confirmPassword){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": name,
            "email": email,
            "username": username,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3434/player/signup", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status) {
                    navigate('/home');
                    console.log('Sign Up Succesfull');
                }
                else {
                    console.log(result.msg);
                }
            })
        }
    }




    return (
        <div className="welcome">

            <div className="signup">
                <div className="login-right">

                    <div className="login-container">
                        <input
                            placeholder="Enter Your Name"
                            className="login-field"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)
                            }
                        />
                        <label htmlFor="login-field" className="login-label">Enter Your Name</label>
                        <span className="login-highlight"></span>
                    </div>

                    <div className="login-container">
                        <input
                            placeholder="Enter Your Email"
                            className="login-field"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="login-field" className="login-label">Enter Your Email</label>
                        <span className="login-highlight"></span>
                    </div>

                    <div className="login-container">
                        <input
                            placeholder="Enter Username"
                            className="login-field"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="login-field" className="login-label">Enter Username</label>
                        <span className="login-highlight"></span>
                    </div>

                    <div className="login-container">
                        <input
                            placeholder="Enter Password"
                            className="login-field"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="login-field" className="login-label">Enter Password</label>
                        <span className="login-highlight"></span>
                    </div>

                    <div className="login-container">
                        <input
                            placeholder="Confirm Password"
                            className="login-field"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="login-field" className="login-label">Confirm Password</label>
                        <span className="login-highlight"></span>
                    </div>

                    <div className="login-btn">
                        <button onClick={handleSignUp}>Submit</button>
                        <button onClick={() => navigate('/')}>Sign In</button>
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