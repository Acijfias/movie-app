
import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://158.220.111.34:8084/api/v1/auth/login', {
                phoneNumber: login,
                password: password
            })
            if (response.status === 200) {
                navigate('/')
            }
        }
        catch (err) {
            console.log(err)
        }
    };

    console.log(login, password)

    return (
        <div className="container">
            <div className="d-flex p-5 justify-content-center align-items-center flex-column">
                <div>
                    <img src="/Movie.png" alt="Movie Logo" />
                </div>
                <div className="login mt-5">
                    <form onSubmit={handleLogin} className="p-4 w-100 h-100">
                        <h3>Login</h3>
                        <div className="p-2">
                            <div className="wave-group">
                                <input
                                    required
                                    type="text"
                                    className="input text-white"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                                <span className="bar"></span>
                                <label className="label" style={{ opacity: "0.5" }}>
                                    <span className="label-char" style={{ "--index": 0 }}>
                                        E
                                    </span>
                                    <span className="label-char" style={{ "--index": 1 }}>
                                        m
                                    </span>
                                    <span className="label-char" style={{ "--index": 2 }}>
                                        a
                                    </span>
                                    <span className="label-char" style={{ "--index": 3 }}>
                                        i
                                    </span>
                                    <span className="label-char" style={{ "--index": 4 }}>
                                        l
                                    </span>
                                    <span
                                        className="label-char"
                                        style={{ "--index": 5, marginLeft: "5px" }}
                                    >
                                        a
                                    </span>
                                    <span className="label-char" style={{ "--index": 6 }}>
                                        d
                                    </span>
                                    <span className="label-char" style={{ "--index": 7 }}>
                                        d
                                    </span>
                                    <span className="label-char" style={{ "--index": 8 }}>
                                        r
                                    </span>
                                    <span className="label-char" style={{ "--index": 9 }}>
                                        e
                                    </span>
                                    <span className="label-char" style={{ "--index": 10 }}>
                                        s
                                    </span>
                                    <span className="label-char" style={{ "--index": 11 }}>
                                        s
                                    </span>
                                </label>
                            </div>
                            <div className="wave-group mt-3">
                                <input
                                    required
                                    type="password"
                                    className="input text-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="bar"></span>
                                <label className="label" style={{ opacity: "0.5" }}>
                                    <span className="label-char" style={{ "--index": 0 }}>
                                        P
                                    </span>
                                    <span className="label-char" style={{ "--index": 1 }}>
                                        a
                                    </span>
                                    <span className="label-char" style={{ "--index": 2 }}>
                                        s
                                    </span>
                                    <span className="label-char" style={{ "--index": 3 }}>
                                        s
                                    </span>
                                    <span className="label-char" style={{ "--index": 4 }}>
                                        w


                                    </span>
                                    <span className="label-char" style={{ "--index": 5 }}>
                                        o
                                    </span>
                                    <span className="label-char" style={{ "--index": 6 }}>
                                        r
                                    </span>
                                    <span className="label-char" style={{ "--index": 7 }}>
                                        d
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column text-center">
                            <button onClick={handleLogin} className="button text-center mt-4" type="submit">
                                Login to your account
                            </button>
                            <div className="d-flex gap-2 mt-4">
                                <h6 className="login-h">Don’t have an account?</h6>
                                <Link style={{ textDecoration: "none" }} to={"/register"}>
                                    <h6 className="login-sign">Sign Up</h6>
                                </Link>
                            </div>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}