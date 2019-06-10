import React from "react";

function Search(props) {
    return (
        <div>
            <h4>Go Hunting!</h4>
            <form className="search">
                <div className="form-group">
                <label htmlFor="books">Book</label>
                <input
                    value={props.search}
                    name="book"
                    type="text"
                    className="form-control"
                    placeholder="Search for books by title here"
                    id="book"
                />
                </div>
                <div className="form-group">
                <button type="submit" onClick={props.handleSearchSubmit} className="btn btn-success">
                    Search
                </button>
                </div>
            </form>
        </div>
    )
}

export default Search;