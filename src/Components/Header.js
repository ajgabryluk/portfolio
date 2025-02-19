import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header.css"
export default function Header(){
    return(
        <header>
            <p><Link to="/" class={"homeLink"}>Aaron Gabryluk</Link></p>
            <div class={"linkContainer"}>
                <p class={"subLinkContainer"}>
                    <Link to="/projects" class={"headerLink"}>Projects</Link>
                    <div class="linkBorder" />
                    <Link to="https://drive.google.com/uc?export=download&id=18AV_WgsOD6KZDPXF8zjsEH28U3X2Ue1H" class={"headerLink"}>Resume</Link>
                    <div class="linkBorder" />
                    <Link to="/about" class={"headerLink"}>About</Link>
                </p>
            </div>
        </header>
    )
}