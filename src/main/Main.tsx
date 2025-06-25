import Navbar from "../components/Navbar";
import Gallery from "./components/Gallery";
import Circles from "./components/Circles";
import LanguageDescription from "./components/LanguageDescription";
import Footer from "../components/Footer";
import React from "react";
function Main() {
    return (
        <div>
            <Navbar active="1"/>
            <Gallery/>
            <Circles/>
            <LanguageDescription/>
            <Footer/>
        </div>
    );
}
export default Main;