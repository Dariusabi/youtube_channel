import React, { useState } from 'react';
import youtube from '../actions/youtube';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { fire } from "../actions/firebase"


function SearchPage() {

    const logout = () => {
        fire.auth().signOut();
    };

    const [results, setResult] = useState([]);
    
    const searchTextChanged = async (searchText) => {
        const response = await youtube.get('/search', {
            params: { q: searchText }
        });
        
        setResult(response.data.items)
    };

    return (
        <div>
            <SearchBar setText={searchTextChanged}/>
            <div>
                <VideoList results={results}/>
            </div>
            <div id="logout">
                <button className="btn btn-secondary" onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

export default SearchPage;
