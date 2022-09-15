import React, { ReactNode, useEffect } from "react";

const SearchResult = (props: {obj: {title: string, displayLink: string, snippet: string}, searchQuery: string}) => {
    let {title, displayLink, snippet} = props.obj;
    const searchQuery = props.searchQuery;

    displayLink = "https://" + displayLink;

    return (
        <div className="result-container">
            <a href={displayLink}>
                <p className="page-link">{displayLink}</p>
                <p className="page-title">{title}</p>
            </a>
            <p className="page-snippet">{snippet}</p>
            
        </div>
    )
}

export default SearchResult;