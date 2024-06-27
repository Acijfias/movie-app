import React, { useEffect, useState } from 'react'
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
        img: "/39.png",
        name: "Dark Side of the Moon",
        year: "2018",
        type: "TV Series",
        rating: "PG",
        saved: true,
        icon: "PiTelevision"
    },
    {
        id: 2,
        img: "/7.png",
        name: "The Diary",
        year: "2019",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 3,
        img: "/11.png",
        name: "Autosport The Series",
        year: "2016",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 4,
        img: "/13.png",
        name: "Below Echo",
        year: "2016",
        type: "TV Series",
        rating: "18+",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 5,
        img: "/14.png",
        name: "The Rockies",
        year: "2015",
        type: "TV Series",
        rating: "E",
        saved: true,
        icon: "PiTelevision"
    },
    {
        id: 6,
        img: "/16.png",
        name: "Community of Ours",
        year: "2018",
        type: "TV Series",
        rating: "18+",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 7,
        img: "/40.png",
        name: "Undiscovered Cities",
        year: "2019",
        type: "TV Series",
        rating: "E",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 8,
        img: "/21.png",
        name: "112",
        year: "2013",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 9,
        img: "/24.png",
        name: "Production Line",
        year: "2018",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 10,
        img: "/25.png",
        name: "Dogs",
        year: "2016",
        type: "TV Series",
        rating: "E",
        saved: true,
        icon: "PiTelevision"
    },
    {
        id: 11,
        img: "/26.png",
        name: "Asia in 24 Days",
        year: "2020",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 12,
        img: "/31.png",
        name: "Unresolved Cases",
        year: "2018",
        type: "TV Series",
        rating: "18+",
        saved: true,
        icon: "PiTelevision"
    },
    {
        id: 13,
        img: "/29.png",
        name: "The Tasty Tour",
        year: "2016",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
    {
        id: 14,
        img: "/10.png",
        name: "During The Hunt",
        year: "2016",
        type: "TV Series",
        rating: "PG",
        saved: false,
        icon: "PiTelevision"
    },
]
export default function Serries() {
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
                <h3 className='trending text-white mt-3' style={{ display: value === searchTerm ? 'block' : 'none' }}>Series</h3>
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
