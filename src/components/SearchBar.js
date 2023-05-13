import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css"
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const searchTimeout = useRef(null);

    useEffect(() => {
        // This effect will run every time the searchTerm changes
        // If searchTerm changes within 0.5 seconds, the previous timeout is cleared
        clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => {
            // Perform the search after 0.5 seconds
            performSearch();
        }, 500);
    }, [searchTerm]);

    function performSearch() {
        console.log(`Searching for "${searchTerm}"`);
        // Perform the search here
    }

    function handleClearClick() {
        setSearchTerm('');
    }

    return (
        <ul id="menu">
            <li>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClick={handleClearClick}
                    className={"search-input"}
                />
            </li>

            <li><a href="/blogs">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    )
}

export default SearchBar;