import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";


class Search extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    }

    render() {
        return <>
            <Jumbotron>
                <div className="text-center">
                <h1>Search Book Hunter</h1>
                <p>Powered by Google Books API</p>
                </div>
            </Jumbotron>
            <Container>
                <SearchBox></SearchBox>
            </Container>
            <Container>
                <h3>Search Results</h3>
                <SearchResults></SearchResults>
            </Container>
        </>
    }
}

export default Search;