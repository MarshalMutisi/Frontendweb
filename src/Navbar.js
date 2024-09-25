import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage navbar visibility

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">MelloTechy</h1>
                <button className="hamburger" onClick={toggleNavbar}>
                    <div className={isOpen ? 'open' : ''} />
                    <div className={isOpen ? 'open' : ''} />
                    <div className={isOpen ? 'open' : ''} />
                </button>
            </div>
            <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/add-movie" className="navbar-link">Add Movie</Link>
            </div>
        </nav>
    );
};

export default Navbar;
