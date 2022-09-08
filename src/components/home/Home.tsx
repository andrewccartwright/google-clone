import Footer from "./Footer";
import Header from "./Header";
import Searchbar from "./Searchbar";

const Home = (props: {}) => {
    return (
        <div>
            <Header />
            <Searchbar />
            <Footer />
        </div>
    )
}

export default Home;