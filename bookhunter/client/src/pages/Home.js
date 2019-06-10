import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import LgButton from "../components/LgButton";
import Container from "../components/Container";
import Search from "../components/Search";

function Home () {
    let blueBackground = {
        backgroundColor: '#5bc0de',
    };

    return (
        <div>
            <Jumbotron>
                <h1>Welcome to Book Hunter</h1>
                <p>Powered by Google Books API</p>
                <div className="text-center">
                    <LgButton>
                        <Link
                        to="/search"
                        className={window.location.pathname === "/search"}
                        style={{color: "white"}}
                        >
                        Search Books
                        </Link>
                        
                    </LgButton>

                    <LgButton style={blueBackground}>
                    <Link
                        to="/saved"
                        className={window.location.pathname === "/saved"}
                        style={{color: "white"}}
                        >
                        Saved Books
                        </Link>
                        
                    </LgButton>
                </div>
            </Jumbotron>
            <Container>
                <Search></Search>
            </Container>
            
        </div>
    )
}

export default Home;