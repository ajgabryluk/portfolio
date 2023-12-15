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
                    <Link class={"headerLink"}>Resume</Link>
                    <div class="linkBorder" />
                    <Link to="/about" class={"headerLink"}>About</Link>
                </p>
            </div>
        </header>
    )
}