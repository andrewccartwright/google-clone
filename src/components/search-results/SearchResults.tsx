import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import SearchResult from './SearchResult';
import '../../css/search-results/SearchResults.css';

const apiUrl = 'https://www.googleapis.com/customsearch/v1';

type SearchInfo = {
    formattedSearchTime: string,
    formattedTotalResults: string,
    searchTime: number,
    totalResults: string
}

const SearchResults = (props: {searchQuery: string}) => {
    const [searchResults, setSearchResults] = useState<Object[]>();
    const [searchInfo, setSearchInfo] = useState<SearchInfo>();
    const [searchQuery, setSearchQuery] = useState(props.searchQuery);
    const [timedOut, setTimedOut] = useState<boolean>(false);

    const [params, setParams] = useState({
        key: process.env.REACT_APP_API_KEY,
        cx: process.env.REACT_APP_ENGINE_ID,
        q: props.searchQuery
    });

    const performSearch = async () => {
        console.log(searchQuery);
        params.q = searchQuery;
        setParams(params);

        document.title = `${searchQuery} - Google Search`;

        await axios.get(apiUrl, { params })
            .then((res) => {
                console.log(res);
                setSearchResults(res.data.items);
                setSearchInfo(res.data.searchInformation);
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status === 429) {
                    setTimedOut(true);
                }
            });    
    }

    useEffect(() => {
        performSearch();
    }, [searchQuery]);

    return (
        <div>
            <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

            {!timedOut ? <div id="results-section">
            {
                searchInfo && <p id="search-summary">About {searchInfo.formattedTotalResults} results ({searchInfo.formattedSearchTime} seconds)</p>
            }
            {
                searchResults && searchResults.map((searchResult: any, index: number) => {
                    return (
                        <SearchResult key={index} obj={searchResult} searchQuery={props.searchQuery} />
                    )
                })
            }
            </div> : 
            <div>
                <p id="rate-limit-error">Rate Limit Exceeded - Please try again tomorrow</p>
            </div>}
            
        </div>
    )
}

export default SearchResults;