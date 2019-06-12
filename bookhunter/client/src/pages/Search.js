import React, { Component } from "react";
// import { Link } from "react-router-dom";
import GoogleAPI from "../utils/GoogleAPI";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";
import Wrapper from "../components/Wrapper";


class Search extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    

    handleSearchSubmit = event => {
        event.preventDefault();
        GoogleAPI.huntBook(this.state.search)
            .then(res => {
                debugger;
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({results: res.data.message, error: ""});
            })
            .catch(err => this.setState({error: err.message}));
    };

    render() {
        return <>
            <Jumbotron>
                <div className="text-center">
                <h1>Search Book Hunter</h1>
                <p>Powered by Google Books API</p>
                </div>
            </Jumbotron>
            <Container>
                <SearchBox
                handleInputChange={this.handleInputChange}
                handleSearchSubmit={this.handleSearchSubmit}
                />
            </Container>
            <Wrapper>
            {this.state.results.map(result => (
                <SearchResults
                    title={result.title}
                    author={result.author}
                    description={result.description}
                    image={result.image}
                    link={result.link}
                />
                ))} 
            </Wrapper>
        </>
    }
}

export default Search;