import React, { useState, useEffect } from "react";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import './Recoment.css'
import { SiYoutubemusic } from "react-icons/si";
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
        img: "/7.png",
        name: "The Diary",
        year: "2019",
        type: "TV Series",
        rating: "PG-13",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 3,
        img: "/8.png",
        name: "Earth’s Untouched",
        year: "2017",
        type: "Movie",
        rating: "18+",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 4,
        img: "/9.png",
        name: "No Land Beyond",
        year: "2019",
        type: "Movie",
        rating: "E",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 5,
        img: "/10.png",
        name: "During The Hunt",
        year: "2016",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 7,
        img: "/11.png",
        name: "Autosport The Series",
        year: "2016",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 8,
        img: "/12.png",
        name: "Same Answer II",
        year: "2017",
        type: "Movie",
        rating: "E",
        saved: false,
        icon: "MdLocalMovies"
    },
    {
        id: 9,
        img: "/13.png",
        name: "Below Echo",
        year: "2016",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 10,
        img: "/14.png",
        name: "The Rockies",
        year: "2015",
        type: "TV Series",
        rating: "G",
        saved: true,
        icon: "PiTelevision"
    },
    {
        id: 11,
        img: "/15.png",
        name: "Relentless",
        year: "2017",
        type: "Movie",
        rating: "PG",
        saved: true,
        icon: "MdLocalMovie"
    },
    {
        id: 12,
        img: "/16.png",
        name: "Community of Ours",
        year: "2018",
        type: "TV Series",
        rating: "18+",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 13,
        img: "/17.png",
        name: "Van Life",
        year: "2015",
        type: "Movie",
        rating: "PG",
        saved: false,
        icon: "MdLocalMovie"
    },
    {
        id: 14,
        img: "/18.png",
        name: "The Heiress",
        year: "2021",
        type: "Movie",
        rating: "PG",
        saved: true,
        icon: "MdLocalMovie"
    },
    {
        id: 15,
        img: "/19.png",
        name: "Off the Track",
        year: "2017",
        type: "Movie",
        rating: "18+",
        saved: true,
        icon: "MdLocalMovie"
    },
    {
        id: 16,
        img: "/20.png",
        name: "Whispering Hill",
        year: "2017",
        type: "Movie",
        rating: "G",
        saved: false,
        icon: "MdLocalMovie"
    },
    {
        id: 17,
        img: "/21.png",
        name: "112",
        year: "2013",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 18,
        img: "/23.png",
        name: "Lone Heart",
        year: "2017",
        type: "Movie",
        rating: "E",
        saved: false,
        icon: "MdLocalMovie"
    },
    {
        id: 19,
        img: "/24.png",
        name: "Production Line",
        year: "2018",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 20,
        img: "/25.png",
        name: "Dogs",
        year: "2016",
        type: "TV Series",
        rating: "E",
        saved: true,
        icon: "PiTelevision"
    },
    {
        id: 21,
        img: "/26.png",
        name: "Asia in 24 Days",
        year: "2020",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 22,
        img: "/29.png",
        name: "The Tasty Tour",
        year: "2016",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 23,
        img: "/30.png",
        name: "Darker",
        year: "2017",
        type: "Movie",
        rating: "18+",
        saved: true,
        icon: "MdLocalMovies"
    },
    {
        id: 24,
        img: "/31.png",
        name: "Unresolved Cases",
        year: "2018",
        type: "TV Series",
        rating: "18+",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 25,
        img: "/32.png",
        name: "Mission: Saturn",
        year: "2017",
        type: "Movie",
        rating: "PG",
        saved: true,
        icon: "MdLocalMovies"
    },
];

export default function Recomend({ searchTerm, value }) {
    const [reco, setReco] = useState(initialData);
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

    const handleSaveeClick = (id) => {
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
        <div className="" >
            <div className="text-white">
                <h4 style={{ display: value === searchTerm ? 'none' : 'block' }}>
                    Found {filteredReco.length} results for {value}
                </h4>
            </div>

            <div  className=" reco-container d-flex flex-wrap justify-content-center align-items-center gap-3">
                {filteredReco.map(reco => (
                    <div data-aos='zoom-in' key={reco.id}>
                        <div className="reco-card" style={{ position: 'relative', borderRadius: "8px" }}>
                            <div className="">
                            <div className="img w-100 h-100">
                                <img src={reco.img} alt={reco.name} className="reco-image w-100 h-100" />
                                <div className="overlay ">
                                
                                    <div className="play-button">
                                    <div className=" d-flex d-flex justify-content-center align-items-center text-center gap-3">
                                        <div><SiYoutubemusic className="text-dark fs-2" /></div>
                                        <div className="text-dark mt-2"><h6>Play</h6></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="bookmark-icon"
                                onClick={() => handleSaveeClick(reco.id)}
                                src={reco.saved ? "/28.png" : "/22.png"}
                                style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
                                alt="Bookmark"
                            />
                            </div>
                        </div>
                            <div className="reco-info text-white">
                                <div className="d-flex gap-2 uu align-items-center">
                                    <span className="reco-year">{reco.year}</span>
                                    <span className="reco-year">•</span>
                                    <div className="d-flex align-items-center gap-1">
                                        {getIconComponent(reco.icon)}
                                        <span className="reco-type">{reco.type}</span>
                                    </div>
                                    <span className="reco-type">•</span>
                                    <span className="reco-rating">{reco.rating}</span>
                                </div>
                                <div className="">
                                    <h3 className="h3">{reco.name}</h3>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}