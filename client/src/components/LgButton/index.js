import React from "react";
import "./style.css";

function LgButton({ props, children }) {
    return(
        <button className="btn btn-lg btn-success">
            { children }
        </button>
    )
}

export default LgButton;