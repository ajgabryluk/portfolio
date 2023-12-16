import React from 'react';
import WordCloud from './WordCloud';
import Projects from './Projects';
import "../Styles/Home.css"

export default function Home(){
    return(
        <main>
            <p id="mainText" class="breathing">Who is <span style={{color: "#EF233C"}}>Aaron Gabryluk</span>?</p>
            <div style={{height: "400px", width: "550px"}}>
                <WordCloud />
            </div>
            <Projects />
        </main>
    )
}