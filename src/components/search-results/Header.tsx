import GoogleLogo from "../home/GoogleLogo";
import '../../css/search-results/Header.css';
import Searchbar from "./Searchbar";

const Header = (props: {setSearchQuery: Function, searchQuery: string}) => {
    return (
        <div id="search-header">
            <GoogleLogo id="search-logo-container" imgId="search-google-logo" />
            <Searchbar setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} />
        </div>
    )
}

export default Header;