import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import MovieForm from './MovieForm';
import Navbar from './Navbar'; // Import the Navbar component
import './App.css'

function App() {
    return (
        <div className="container mx-auto">
            <Navbar /> {/* Render the Navbar */}
            <div className="p-6">
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                    <Route path="/add-movie" element={<MovieForm />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
