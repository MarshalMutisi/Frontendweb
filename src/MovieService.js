import axios from 'axios';

const API_URL = "http://localhost:8099/api/movies";

export const getAllMovies = async () => {
    return await axios.get(API_URL);
};

export const getMovieById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const createMovie = async (movie) => {
    return await axios.post(API_URL, movie);
};

export const updateMovie = async (id, movie) => {
    return await axios.put(`${API_URL}/${id}`, movie);
};

export const deleteMovie = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
