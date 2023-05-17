import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css"
import {useLazyQuery} from "@apollo/client";
import {SEARCH_GET_ARTICLES} from "../queries/Article/articleQuerys"
import clientHasuraPublic from "../apolloClient";

const SearchBar = () =>  {
    const [activeSearchTerm, setActiveSearchTerm] = useState('');
    const [actualSearchTerm, setActualSearchTerm] = useState('');
    const searchTimeout = useRef(null);
    //const [getArticles, { loading, error, data }] = useLazyQuery(SEARCH_GET_ARTICLES);

    useEffect(() => {
        // This effect will run every time the searchTerm changes
        // If searchTerm changes within 0.5 seconds, the previous timeout is cleared
        if (activeSearchTerm === '') return;
        clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => {
                performSearch();
        }, 500);
    }, [activeSearchTerm]);

    function performSearch() {
        console.log("searching for",activeSearchTerm);
        setActualSearchTerm(activeSearchTerm);
        handleSearch();
    }

    function handleClearClick() {
        setActiveSearchTerm('');
    }
    
    const [getArticles, { loading, error, data },] = useLazyQuery(SEARCH_GET_ARTICLES, {client: clientHasuraPublic});

    const handleSearch = () => {
        getArticles({ variables: { searchQuery: `${actualSearchTerm}%` },
        onCompleted: (res) => {console.log(res);}
        });
    }
    
    return (
        <ul id="menu">
            <li>
                <input
                    type="text"
                    value={activeSearchTerm}
                    onChange={(e) => setActiveSearchTerm(e.target.value)}
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