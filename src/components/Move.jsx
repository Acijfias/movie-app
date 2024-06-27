import React, { useEffect, useState } from 'react';
import { MdLocalMovies } from 'react-icons/md';
import { PiTelevision } from 'react-icons/pi';
import './Recoment.css';
import './Move.css';
import { SiYoutubemusic } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const initialData = [
    {
        id: 1,
        img: "/6.png",
        name: "The Great Lands",
        year: "2019",
        type: "Movie",
        rating: "PG",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 2,
        img: "/8.png",
        name: "Earth’s Untouched",
        year: "2017",
        type: "Movie",
        rating: "18+",
        saved: false,
        icon: "MdLocalMovies"

    },
    {

        id: 3,
        img: "/9.png",
        name: "No Land Beyond",
        year: "2019",
        type: "Movie",
        rating: "E",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 4,
        img: "/12.png",
        name: "Same Answer II",
        year: "2017",
        type: "Movie",
        rating: "E",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 5,
        img: "/15.png",
        name: "Relentless",
        year: "2017",
        type: "Movie",
        rating: "PG",
        saved: true,
        icon: "MdLocalMovies"
    },

    {
        id: 6,
        img: "/33.png",
        name: "Beyond Earth",
        year: "2019",
        type: "Movie",
        rating: "PG",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 7,
        img: "/34.png",
        name: "Van Life",
        year: "2015",
        type: "Movie",
        rating: "PG",
        saved: false,
        icon: "MdLocalMovies"
    },

    {
        id: 8,
        img: "/18.png",
        name: "The Heiress",
        year: "2021",
        type: "Movie",
        rating: "PG",
        saved: true,
        icon: "MdLocalMovies"
    },
    {
        id: 9,
        img: "/19.png",
        name: "Off the Track",
        year: "2017",
        type: "Movie",
        rating: "18+",
        saved: true,
        icon: "MdLocalMovies"
    },
    {
        id: 10,
        img: "/35.png",
        name: "Bottom Gear",
        year: "2021",
        type: "Movie",
        rating: "PG",
        saved: true,
        icon: "MdLocalMovies"
    },
    {
        id: 11,
        img: "/36.png",
        name: "1998",
        year: "2021",
        type: "Movie",
        rating: "18+",
        saved: true,
        icon: "MdLocalMovies"
    },
    {
        id: 12,
        img: "/30.png",
        name: "Darker",
        year: "2017",
        type: "Movie",
        rating: "18+",
        saved: true,
        icon: "MdLocalMovies"
    },
    {
        id: 13,
        img: "/37.png",
        name: "Mission: Saturn",
        year: "2017",
        type: "Movie",
        rating: "PG",
        saved: true,
        icon: "MdLocalMovies"
    },
    {
        id: 14,
        img: "/38.png",
        name: "Whispering Hill",
        year: "2017",
        type: "Movie",
        rating: "E",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 15,
        img: "/23.png",
        name: "Lone Heart",
        year: "2017",
        type: "Movie",
        rating: "E",
        saved: false,
        icon: "MdLocalMovies"
    },
];

export default function Move() {
    const [reco, setReco] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [value, setValue] = useState('');
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        const savedReco = JSON.parse(localStorage.getItem('recoData'));
        if (savedReco) {
            setReco(savedReco);
        } else {
            localStorage.setItem('recoData', JSON.stringify(reco));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('recoData', JSON.stringify(reco));
    }, [reco]);

    const handleSaveClick = (id) => {
        const updatedReco = reco.map(item =>
            item.id === id ? { ...item, saved: !item.saved } : item
        );
        setReco(updatedReco);
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

    const filteredReco = reco.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <div className="d-flex gap-3">
                <div className="d-flex  justify-content-center align-items-center">
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
                <h3 className='trending text-white mt-3' style={{ display: value === searchTerm ? 'block' : 'none' }}>Movies</h3>
            </div>
            <div className="text-white">
                <h4 style={{ display: value === searchTerm ? 'none' : 'block' }}>Found {filteredReco.length} results for {value} </h4>
            </div>
            <div className="reco-container d-flex flex-wrap justify-content-center align-items-center gap-3">

                {filteredReco.map(item => (
                    <div data-aos='zoom-in' key={item.id}>
                        <div className="reco-card">
                            <div style={{ position: 'relative', borderRadius: "8px" }}>
                                <div className="img w-100 h-100">
                                    <img src={item.img} alt={item.name} className="reco-image w-100 h-100" />
                                    <div className="overlay">
                                        <div className="play-button d-flex gap-3">
                                            <div><SiYoutubemusic className="text-dark fs-2" /></div>
                                            <div className="text-dark">Play</div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="bookmark-icon"
                                    onClick={() => handleSaveClick(item.id)}
                                    src={item.saved ? "/28.png" : "/22.png"}
                                    style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
                                    alt="Bookmark"
                                />
                            </div>
                            <div className="reco-info text-white">
                                <div className="d-flex gap-2 uu align-items-center">
                                    <span className="reco-year">{item.year}</span>
                                    <span className="reco-year">•</span>
                                    <div className="d-flex align-items-center gap-1">
                                        {getIconComponent(item.icon)} {/* Icon component */}
                                        <span className="reco-type">{item.type}</span>
                                    </div>
                                    <span className="reco-type">•</span>
                                    <span className="reco-rating">{item.rating}</span>
                                </div>
                                <div>
                                    <h3 className="h3">{item.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
