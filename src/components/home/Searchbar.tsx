import '../../css/Searchbar.css';
import googleLogo from '../../images/google-logo.png';
import micLogo from '../../images/google-mic.png';

const Searchbar = (props: {}) => {

    const handleSubmit = () => {
        window.location.href = '/search';
    }

    return (
        <div id="searchbar-section">
            <div id='logo-container'>
                <img id='google-logo' src={googleLogo} />
            </div>

            <form onSubmit={handleSubmit}>
                <div id='searchbar-container'>
                    <span><i id="search-icon" className="material-symbols-outlined">search</i></span>
                    <input id="searchbar" type="text" />
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