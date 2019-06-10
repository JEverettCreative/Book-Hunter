import React from "react";
import "./style.css";

function SearchResults(props) {
    return (
        <div className="book-box">
            <div className="img-container">
                <img alt={props.title} src={props.image} />
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
      </div>
    )
}

export default SearchResults;