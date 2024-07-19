import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export default function Login() {

    const{username,setUsername,password,setPassword} =useContext(userContext);

    const navigate=useNavigate();

    return (
        <div className="welcome">
            <div className="login">
                <div className="login-left">
                    <h1>Hello People</h1>
                    <h3>Login and Enjoy Your Favourite Music's</h3>
                </div>
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

                    <div className="login-btn">
                        <button onClick={() => navigate('/home')}>Login</button>
                        <button onClick={() => navigate('/signup')}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}