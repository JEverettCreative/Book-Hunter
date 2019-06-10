import React from "react";
import "./style.css";

function Container({ children }) {
    return (
    <div className="container justify-content-center">
        { children }
    </div>
    )
}

export default Container;