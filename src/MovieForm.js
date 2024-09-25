import React, { useState } from 'react';
import { createMovie } from './MovieService';
import './MovieForm.css'; 

const MovieForm = () => {
    const [movie, setMovie] = useState({
        title: '',
        year: '',
        cast: '',
        genres: '',
        href: '',
        extract: '',
        thumbnail: ''
    });

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createMovie(movie)
            .then(() => {
                alert('Movie created successfully');
             
                setMovie({
                    title: '',
                    year: '',
                    cast: '',
                    genres: '',
                    href: '',
                    extract: '',
                    thumbnail: ''
                });
            })
            .catch(error => {
                console.log("Error creating movie:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange} className="form-input" />
            <input type="text" name="year" placeholder="Year" value={movie.year} onChange={handleChange} className="form-input" />
            <input type="text" name="cast" placeholder="Cast" value={movie.cast} onChange={handleChange} className="form-input" />
            <input type="text" name="genres" placeholder="Genres" value={movie.genres} onChange={handleChange} className="form-input" />
            <input type="text" name="href" placeholder="Wikipedia Link" value={movie.href} onChange={handleChange} className="form-input" />
            <textarea name="extract" placeholder="Description" value={movie.extract} onChange={handleChange} className="form-textarea"></textarea>
            <input type="text" name="thumbnail" placeholder="Thumbnail URL" value={movie.thumbnail} onChange={handleChange} className="form-input" />

            {/* Display thumbnail if the URL is valid */}
            {movie.thumbnail && (
                <div className="preview-image">
                    <img src={movie.thumbnail} alt="Thumbnail Preview" className="w-32 h-32 object-cover" />
                </div>
            )}

            <button type="submit" className="submit-button">Create Movie</button>
        </form>
    );
};

export default MovieForm;
