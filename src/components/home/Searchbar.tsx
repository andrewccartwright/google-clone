import '../../css/Searchbar.css';
import googleLogo from '../../images/google-logo.png';

const Searchbar = (props: {}) => {
    return (
        <div id="searchbar-section">
            <div id='logo-container'>
                <img id='google-logo' src={googleLogo} />
            </div>

            <form>
                <div id='searchbar-container'>
                    <span><i id="search-icon" className="material-symbols-outlined">search</i></span>
                    <input id="searchbar" type="text" />
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