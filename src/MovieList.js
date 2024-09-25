import React, { useEffect, useState } from 'react';
import { getAllMovies } from './MovieService';
import { Link } from 'react-router-dom';
import './MovieList.css'; // Import your CSS file

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [showFullDescription, setShowFullDescription] = useState({});

    useEffect(() => {
        getAllMovies()
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log("Error fetching movies:", error);
            });
    }, []);

    // Toggle full description visibility
    const toggleFullDescription = (id) => {
        setShowFullDescription((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="movie-list">
            <h1 className="text-3xl font-bold mb-4 text-center">Movies</h1>

            {/* Grid layout for two movies in a row */}
            <div className="movie-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        {/* Movie Thumbnail */}
                        {movie.thumbnail && (
                            <img 
                                src={movie.thumbnail} 
                                alt={`${movie.title} thumbnail`} 
                                className="movie-thumbnail"
                            />
                        )}
                        {/* Movie Title */}
                        <h2 className="movie-title">{movie.title}</h2>

                        {/* Movie Year */}
                        <p className="movie-year">{movie.year}</p>

                        {/* Movie Description with truncation */}
                        {movie.extract ? (
                            showFullDescription[movie.id] ? (
                                <p className="text-gray-700 mb-4">
                                    {movie.extract}
                                </p>
                            ) : (
                                <p className="text-gray-700 mb-4 truncate">
                                    {movie.extract.substring(0, 100)}...
                                </p>
                            )
                        ) : (
                            <p className="text-gray-700 mb-4">No description available.</p>
                        )}

                        {/* Toggle Read More / Read Less */}
                        <button 
                            onClick={() => toggleFullDescription(movie.id)} 
                            className="toggle-button"
                        >
                            {showFullDescription[movie.id] ? "Read Less" : "Read More"}
                        </button>

                        {/* Optional: Link to Movie Detail Page */}
                        <Link 
                            to={`/movies/${movie.id}`} 
                            className="view-details"
                        >
                            View Movie Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
