import React, { useState } from 'react';

function SearchBar({ setText }) {
    const [searchText, setSearchText] = useState([]);
    
    const submit = (e) => {
        e.preventDefault();
        
        setText(searchText)
    };

    return (
        <div className="content">
            <form onSubmit={submit} className="form">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button">Video Search</button>
                    </div>
                    <input type="text" className="form-control" placeholder="" aria-label=""
                           aria-describedby="basic-addon1" onChange={e => setSearchText(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
