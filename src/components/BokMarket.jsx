import React, { useEffect, useState } from 'react';
import { MdLocalMovies } from 'react-icons/md';
import { PiTelevision } from 'react-icons/pi';
import { SiYoutubemusic } from 'react-icons/si';
import './Recoment.css';
import './Move.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BokMarked() {
    const [reco, setReco] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const savedReco = JSON.parse(localStorage.getItem('recoData')) || [];
        setReco(savedReco.filter(item => item.saved));
    }, []);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const handleSaveClick = (id) => {
        const updatedReco = reco.map(item =>
            item.id === id ? { ...item, saved: !item.saved } : item
        );
        setReco(updatedReco);
        const allReco = JSON.parse(localStorage.getItem('recoData')) || [];
        const updatedAllReco = allReco.map(item =>
            item.id === id ? { ...item, saved: !item.saved } : item
        );
        localStorage.setItem('recoData', JSON.stringify(updatedAllReco));
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

    const filteredMovies = reco.filter(item =>
        item.type === 'Movie' &&
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type.toLowerCase() === searchTerm.toLowerCase())
    );

    const filteredTVSeries = reco.filter(item =>
        item.type === 'TV Series' &&
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type.toLowerCase() === searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="d-flex gap-3">
                <img src="/search.png" alt="Search icon" />
                <input
                    type="text"
                    className='input-search'
                    placeholder='Search for movies or TV series'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <h3 className='trending text-white mt-3'>Bookmarked Movies</h3>
                <h4 className="text-white">Saved {filteredMovies.length} results for Movies</h4>
            </div>
            <div className="reco-container d-flex flex-wrap gap-2 justify-content-center">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(item => (
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
                                            {getIconComponent(item.icon)}
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
                    ))
                ) : (
                    <p>No bookmarked movies found.</p>
                )}
            </div>
            <div>
                <h3 className='trending text-white mt-3'>Bookmarked TV Series</h3>
                <h4 className="text-white">Saved {filteredTVSeries.length} results for TV Series</h4>
            </div>
            <div className="reco-container d-flex flex-wrap gap-3 justify-content-center">
                {filteredTVSeries.length > 0 ? (
                    filteredTVSeries.map(item => (
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
                                            {getIconComponent(item.icon)}
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
                    ))
                ) : (
                    <p>No bookmarked TV series found.</p>
                )}
            </div>
        </div>
    );
}
