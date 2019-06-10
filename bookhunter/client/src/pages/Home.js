import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import LgButton from "../components/LgButton";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";

function Home () {
    let blueBackground = {
        backgroundColor: '#5bc0de',
    };

    return (
        <>
        <div>
            <Jumbotron>
                <div className="text-center">
                <h1>Welcome to Book Hunter</h1>
                <p>Powered by Google Books API</p>
                </div>
            </Jumbotron>
            <Container>
            <div className="text-center container">
                    <LgButton>
                        <Link
                        to="/search"
                        className={window.location.pathname === "/search"}
                        style={{color: "white"}}
                        >
                        Search Books
                        </Link>
                        
                    </LgButton>

                    <LgButton>
                    <Link
                        to="/saved"
                        className={window.location.pathname === "/saved"}
                        style={{color: "white"}}
                        >
                        Saved Books
                        </Link>
                        
                    </LgButton>
                </div>
                
            </Container>
            
        </div>
        </>
    )
}

export default Home;