import '../../css/Footer.css';
import leaf from '../../images/leaf.png';

const Footer = (props: {}) => {
    return (
        <div id="footer">
            <div className="left left-footer">
                <a className="footer-link" href="https://ads.google.com/">Advertising</a>
                <a className="footer-link" href="https://smallbusiness.withgoogle.com/">Business</a>
                <a className="footer-link" href="https://www.google.com/search/howsearchworks/?fg=1">How Search Works</a>
            </div>
            <a id="center-link" className="footer-link" href="https://sustainability.google/"><img id='leaf-img' src={leaf} /> Carbon neutral since 2007</a>
            <div className="right right-footer">
                <a className="footer-link" href="https://policies.google.com/privacy?hl=en&fg=1">Privacy</a>
                <a className="footer-link" href="https://policies.google.com/terms?hl=en&fg=1">Terms</a>
                <a className="footer-link">Settings</a>
            </div>
        </div>
    )
}

export default Footer;