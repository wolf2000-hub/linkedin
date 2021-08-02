import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <main>
            <div className="Header_nav w-100">
                <a href="/home">
                    <img className="img-fluid Header_image" src="./images/linkdinpng.png" alt="" />
                </a>
            </div>
        </main>
    )
}
export default Header;