import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

export default function Register() {
  const [Login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Parolda hato bor");
      return;
    }
    const userData = {
      Login,
      password,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/login');

  };

  return (
    <div className="container">
      <div className="d-flex p-5 justify-content-center align-items-center flex-column">
        <div>
          <img src="/Movie.png" alt="Movie Logo" />
        </div>
        <div className='login mt-5'>
          <form onSubmit={handleRegister} className="p-4 w-100 h-100">
            <h3>Sign Up</h3>
            <div className="p-2">
              <div className="wave-group">
                <input
                  required
                  type="Login"
                  className="input text-white"
                  value={Login}
                  onChange={(e) => setLogin(e.target.value)}
                />
                <span className="bar"></span>
                <label className="label" style={{ opacity: "0.5" }}>
                  <span className="label-char" style={{ "--index": 0 }}>E</span>
                  <span className="label-char" style={{ "--index": 1 }}>m</span>
                  <span className="label-char" style={{ "--index": 2 }}>a</span>
                  <span className="label-char" style={{ "--index": 3 }}>i</span>
                  <span className="label-char" style={{ "--index": 4 }}>l</span>
                  <span className="label-char" style={{ "--index": 5 , marginLeft: "5px"}}>a</span>
                  <span className="label-char" style={{ "--index": 6 }}>d</span>
                  <span className="label-char" style={{ "--index": 7 }}>d</span>
                  <span className="label-char" style={{ "--index": 8 }}>r</span>
                  <span className="label-char" style={{ "--index": 9 }}>e</span>
                  <span className="label-char" style={{ "--index": 10 }}>s</span>
                  <span className="label-char" style={{ "--index": 11 }}>s</span>
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
                  <span className="label-char" style={{ "--index": 0 }}>P</span>
                  <span className="label-char" style={{ "--index": 1 }}>a</span>
                  <span className="label-char" style={{ "--index": 2 }}>s</span>
                  <span className="label-char" style={{ "--index": 3 }}>s</span>
                  <span className="label-char" style={{ "--index": 4 }}>w</span>
                  <span className="label-char" style={{ "--index": 5 }}>o</span>
                  <span className="label-char" style={{ "--index": 6 }}>r</span>
                  <span className="label-char" style={{ "--index": 7 }}>d</span>
                </label>
              </div>
              <div className="wave-group mt-3">
                <input
                  required
                  type="password"
                  className="input text-white"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <span className="bar"></span>
                <label className="label" style={{ opacity: "0.5" }}>
                  <span className="label-char" style={{ "--index": 0 }}>R</span>
                  <span className="label-char" style={{ "--index": 1 }}>e</span>
                  <span className="label-char" style={{ "--index": 2 }}>p</span>
                  <span className="label-char" style={{ "--index": 3 }}>e</span>
                  <span className="label-char" style={{ "--index": 4 }}>a</span>
                  <span className="label-char" style={{ "--index": 5 }}>t</span>
                  <span className="label-char" style={{ "--index": 6, marginLeft: "5px" }}>p</span>
                  <span className="label-char" style={{ "--index": 7 }}>a</span>
                  <span className="label-char" style={{ "--index": 8 }}>s</span>
                  <span className="label-char" style={{ "--index": 9 }}>s</span>
                  <span className="label-char" style={{ "--index": 10 }}>w</span>
                  <span className="label-char" style={{ "--index": 11 }}>o</span>
                  <span className="label-char" style={{ "--index": 12 }}>r</span>
                  <span className="label-char" style={{ "--index": 13 }}>d</span>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column text-center">
              <button className='button text-center mt-4' type="submit">Create an account</button>
              <div className="d-flex gap-2 mt-4">
                <h6 className='login-h'>Already have an account?</h6>
              <Link style={{textDecoration: "none"}} to={'/login'}><h6 className='login-sign'>Login</h6></Link>  
              </div>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
