import React, { useEffect, useState } from 'react';
import '../App.css';
import { SiWindows11 } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import Serries from '../components/Seriries';

export default function Series() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={location.pathname === '/' ? 'home-page' : ''} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {loading ? (
                <div className="loader  d-flex justify-content-center align-items-center text-center" style={{ marginTop: "80px" }}>
                    <HashLoader className='text-center' color={'#ffffff'} loading={loading} size={100} />
                </div>
            ) : (
                <div className="container-fluid">
                    <div className="w row">
                        <div className="home-dash col-6 mt-2 d-flex justify-content-lg-between justify-content-around align-items-center flex-lg-column flex-row">
                            <div className="w-100 d-flex justify-content-around align-items-center flex-lg-column flex-row">
                                <div className="p-lg-4 p-sm-0 p-2">
                                    <img src="/Movie.png" alt="Movie logo" />
                                </div>
                                <div className="d-flex p-3 justify-content-around gap-4 align-items-center flex-lg-column flex-row">
                                    <Link to={'/'} ><SiWindows11 className='icons fs-4' /></Link>
                                    <Link to={'/movies'}><MdLocalMovies className='icons fs-2' /></Link>
                                    <Link to={'/series'}><PiTelevision style={{ opacity: "1", color: "white" }} className='icons fs-2' /></Link>
                                    <Link to={'/bookmared'}><FaBookmark className='icons fs-2' /></Link>
                                </div>
                            </div>
                            <div className="mb-lg-3 p-lg-0 p-sm-5 p-3 d-flex justify-content-center align-items-between">
                                <Link to={'/login'} style={{ textDecoration: "none" }}><img src="/Oval.png" alt="Oval logo" /></Link>
                            </div>
                        </div>
                        <div className="p-sm-4 p-2 mt-sm-0 mt-4 col-sm-11 col-12">
                            <div>
                                <div style={{ maxWidth: "100%" }}>
                                    <Serries />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
