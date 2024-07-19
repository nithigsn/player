import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export default function SignUp() {
    const navigate = useNavigate();
    const { username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword } =useContext(userContext);
    return (
        <div className="welcome">
            <div className="login">
                <div className="login-right">
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
                        <button onClick={() => navigate('/home')}>Submit</button>
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