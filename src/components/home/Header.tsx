import '../../css/Header.css';
import profilePic from '../../images/profile-pic.png';

const Header = (props: {}) => {
    return (
        <div id="header">
            <div className="left left-header">
                <a className="header-link" href="https://about.google/">About</a>
                <a className="header-link" href="https://store.google.com/">Store</a>
            </div>

            <div className="right right-header">
                <a className="header-link" href="https://gmail.com/">Gmail</a>
                <a className="header-link" href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">Images</a>
                <span><i id="nine-dots" className="material-symbols-outlined">apps</i></span>
                <span><img id="profile-pic" src={profilePic}/></span>
            </div>
        </div>
    )
}

export default Header;