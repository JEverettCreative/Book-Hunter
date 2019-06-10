import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={Home} />
              {/* <Route exact path="/about" component={About} />
              <Route exact path="/discover" component={Discover} /> */}
              <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
    
    </Router>
  )
}

export default App;
