import React from "react";
import "./style.css";

function LgButton({ children }) {
    return(
        <button className="btn btn-lg">
            { children }
        </button>
    )
}

export default LgButton;