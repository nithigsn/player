import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export default function SignUp() {

    //useState variables
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { name, setName, email, setEmail, username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, setId } = useContext(userContext);



    function handleSignUp() {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError('');

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            name: name,
            email: email,
            username: username,
            password: password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://player-backend.vercel.app/player/signup", requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                if (result.status) {
                    setId(result.data.id);
                    navigate('/home');
                    console.log(result.data.id);
                } else {
                    setError(result.msg);
                }
            })
            .catch(error => {
                setLoading(false);
                setError("An error occurred. Please try again.");
                console.error("Error:", error);
            });
    }

    return (
        <div className="welcome">
            <div className="signup flex ">
                <div className="login-right">
                    <div className="login-container">
                        <input
                            placeholder="Enter Your Name"
                            className="login-field"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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

                    {error && <div className="error-message">{error}</div>}

                    <div className="login-btn">
                        <button onClick={handleSignUp} disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
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
