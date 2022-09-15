import { useEffect, useState } from "react";
import Footer from "./Footer";
import GoogleLogo from "./GoogleLogo";
import Header from "./Header";
import Searchbar from "./Searchbar";

const Home = (props: {setSearchQuery: Function}) => {
    return (
        <div>
            <Header />
            <GoogleLogo id="logo-container" imgId="google-logo" />
            <Searchbar setSearchQuery={props.setSearchQuery} />
            <Footer />
        </div>
    )
}

export default Home;