import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const Footer=() => {
    return (
        <div className="footer">
            <span>Follow me on Social!</span>
            <div class="icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-pinterest"></i>
            </div>
        </div>
    )
}

export default Footer