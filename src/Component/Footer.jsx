import React from "react";

function Footer(){
    var currentTime = new Date()

    return <footer> 
    <p>copyright © {currentTime.getFullYear()}</p>
    </footer>
}

export default Footer;