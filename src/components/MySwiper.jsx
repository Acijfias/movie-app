import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import "swiper/css";
import Recomend from "./Recomend";
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiYoutubemusic } from "react-icons/si";

const initialData = [
    {
        id: 1,
        img: "/1.png",
        name: "Beyond Earth",
        icon: "MdLocalMovies",
        year: "2019",
        type: "Movie",
        rating: "PG",
        saved: false
    },
    {
        id: 2,
        img: "/2.png",
        name: "Bottom Gear",
        icon: "MdLocalMovies",
        year: "2021",
        type: "Movie",
        rating: "PG-13",
        saved: false
    },
    {
        id: 3,
        img: "/3.png",
        name: "Undiscovered Cities",
        icon: "PiTelevision",
        year: "2019",
        type: "TV Series",
        rating: "E",
        saved: false
    },
    {
        id: 4,
        img: "/4.png",
        name: "1998",
        icon: "MdLocalMovies",
        year: "2021",
        type: "Movie",
        rating: "18+",
        saved: false
    },
    {
        id: 5,
        img: "/5.png",
        name: "Dark Side Of The Moon",
        icon: "PiTelevision",
        year: "2018",
        type: "TV Series",
        rating: "PG",
        saved: false
    },
];

export default function MySwiper() {
    const [movies, setMovies] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(initialData);
    const [value, setValue] = useState('');

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('moviesData'));
        if (savedMovies) {
            setMovies(savedMovies);
            setFilteredMovies(savedMovies);
        }
    }, []);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        localStorage.setItem('moviesData', JSON.stringify(movies));
        setFilteredMovies(movies.filter(movie =>
            movie.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }, [movies, searchTerm]);

    const handleSaveClick = (id) => {
        const updatedMovies = movies.map(movie =>
            movie.id === id ? { ...movie, saved: !movie.saved } : movie
        );
        setMovies(updatedMovies);
    };

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case "MdLocalMovies":
                return <MdLocalMovies />;
            case "PiTelevision":
                return <PiTelevision />;
            default:
                return null;
        }
    };

    return (
        <div data-aos='zoom-in'>
            <div className="d-flex gap-3">
                <div className="d-flex justify-content-center align-items-center">
                    <img src="/search.png" alt="Search icon" />
                </div>
                <input
                    type="text"
                    className='input-search'
                    placeholder='Search for movies or TV series'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <h3 className='trending text-white mt-3' style={{ display: value === searchTerm ? 'block' : 'none' }}>Trending</h3>
            </div>
            <div className="swiper-container" style={{ width: "100%" }}>
                <Swiper
                    spaceBetween={7}
                    slidesPerView={1.5}
                    breakpoints={{
                        992: {
                            slidesPerView: 2.5
                        },
                        576: {
                            slidesPerView: 1.3
                        }
                    }}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                    style={{
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        display: value === searchTerm ? 'block' : 'none'
                    }}
                >
                    {filteredMovies.map(movie => (
                        <SwiperSlide key={movie.id}>
                            <div className="movie-card">

                                <div style={{ maxWidth: "100%", position: 'relative' }}>

                                    <div className="img">
                                        <img src={movie.img} alt={movie.name} className="reco-image w-100 h-100" />
                                        <div className="overlay h-100">
                                            <div className="play-button d-flex gap-3">
                                                <div><SiYoutubemusic className="text-dark fs-2" /></div>
                                                <div className="text-dark">Play</div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        className="bookmark-icon"
                                        onClick={() => handleSaveClick(movie.id)}
                                        src={movie.saved ? "/28.png" : "/22.png"}
                                        style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer' }}
                                        alt="Bookmark"
                                    />
                                </div>
                                <div className="movie-info">
                                    <div className="d-flex gap-2 justify-content-around align-items-center">
                                        <span className="movie-year">{movie.year}</span>
                                        <span className="movie-year">•</span>
                                        <div className="d-flex align-items-center gap-1">
                                            {getIconComponent(movie.icon)}
                                            <span className="movie-type">{movie.type}</span>
                                        </div>
                                        <span className="movie-type">•</span>
                                        <span className="movie-rating">{movie.rating}</span>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: "18px" }}>{movie.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <div className="mt-3">
                    <h3 className="uz" style={{ display: value === searchTerm ? 'block' : 'none' }}>Recommended for you</h3>
                    <Recomend searchTerm={searchTerm} value={value} />
                </div>
            </div>
        </div>
    );
}
