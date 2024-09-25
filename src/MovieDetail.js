import React, { useEffect, useState } from 'react';
import { getMovieById } from './MovieService';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieById(id)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.log("Error fetching movie:", error);
            });
    }, [id]);

    return (
        <div className="p-6">
            {movie ? (
                <div>
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <p>{movie.year}</p>
                    <p>{movie.extract}</p>
                    <img src={movie.thumbnail} alt={movie.title} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetail;
