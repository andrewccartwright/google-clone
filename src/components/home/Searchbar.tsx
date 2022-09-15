import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/home/Searchbar.css';
import micLogo from '../../images/google-mic.png';

const Searchbar = (props: {setSearchQuery: Function}) => {
    const [searchQuery, setSearchQuery] = useState<string>();
    const navigate = useNavigate();

    const handleSubmit = (event: React.SyntheticEvent): void => {
        props.setSearchQuery(searchQuery);

        navigate('/search');
    }

    return (
        <div id="searchbar-section">

            <form onSubmit={handleSubmit}>
                <div id='searchbar-container'>
                    <span><i id="search-icon" className="material-symbols-outlined">search</i></span>
                    <input id="searchbar" type="text" onChange={event => setSearchQuery(event.target.value)} />
                    <img id="mic-icon" src={micLogo} />
                </div>

                <div id='button-container'>
                    <button className='btn'>Google Search</button>
                    <button className='btn'>I'm Feeling Lucky</button>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;