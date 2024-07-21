import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export default function Login() {
    const { username, setUsername, password, setPassword, id, setId } = useContext(userContext);
    const navigate = useNavigate();

    console.log(id);

    async function handleLogIn() {

        if (username !== "" && password !== "") {

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "username": username,
                "password": password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("http://localhost:3434/player/signin", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        console.log('Successfull Login');
                        console.log(result.data.id);
                        console.log(result.data.username);
                        navigate('/home');
                        setId(result.data.id);
                       

                    }
                    else {
                        alert('error');
                    }
                })

        }
    }


    return (
        <div className="welcome">
            <div className="login">
                <div className="login-left">
                    <h1>Hello People</h1>
                    <h3>Login and Enjoy Your Favourite Music's</h3>
                </div>
                <div className="login-right">
                    <form action="">
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

                    </form>
                    <div className="login-btn">
                        <button onClick={handleLogIn}>Login</button>
                        <button onClick={() => navigate('/signup')}>Sign Up</button>

                    </div>

                </div>
            </div>
        </div>
    );
}
