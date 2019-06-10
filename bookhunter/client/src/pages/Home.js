import React from "react";
import Jumbotron from "../components/Jumbotron";
import LgButton from "../components/LgButton";

function Home () {
    return (
        <div className="text-center">
            <Jumbotron>
                <h1>Welcome to Book Hunter</h1>
                <p>Powered by Google Books API</p>
                <div className="text-center">
                    <LgButton className="btn-primary">
                        Search Books
                    </LgButton>
                    <LgButton className="btn-primary">
                        Saved Books
                    </LgButton>
                </div>
            </Jumbotron>
            
        </div>
    )
}

export default Home;