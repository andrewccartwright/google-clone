import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/search-results/Searchbar.css';
import micLogo from '../../images/google-mic.png';

const Searchbar = (props: {setSearchQuery: Function, searchQuery: string}) => {
    const [searchQuery, setSearchQuery] = useState<string>(props.searchQuery);

    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        props.setSearchQuery(searchQuery);
    }

    return (
        <div id="results-searchbar-section">

            <form onSubmit={handleSubmit}>
                <div id='results-searchbar-container'>
                    <input id="results-searchbar" type="text" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} />
                    <img id="results-mic-icon" src={micLogo} />
                    <span><i id="results-search-icon" className="material-symbols-outlined">search</i></span>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;