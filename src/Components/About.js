import React from 'react';
import "../Styles/About.css"

export default function About(){
    return(
        <main>
            <div class="mainSection">
                <div id="profilePicture">
                    <img src="/pfp.jpg" alt="profile_picture" width="75%" height="75%" style={{borderRadius: "50%", display: "block", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} />
                </div>
                <div id="introText">
                    <p style={{fontSize: "2em"}}>Aaron Gabryluk is an inspired developer and researcher with a goal of improving and understanding the user experience.</p>
                    <p style={{fontSize: "1em"}}>I am a seasoned user experience researcher with professional full stack development experience. Team player and passionate about VR, BCI, and AI research.</p>
                    <p style={{fontSize: "1em"}}>Skilled at solving multi-layered problems with logical problem solving skills and and quick thinking. Picks up on things quickly, and is always willing to put in the extra effort to understand the problem space.</p>
                    <p style={{fontSize: "1.2em"}}>Currently pursuing my Masters Degree in Human Computer Interaction from Georgia Institute of Technology, and <b>I am actively looking for an internship for the summer of 2024.</b></p>
                </div>
            </div>
            <div class="darkSection listSection">
                <div style={{flexBasis: "500px"}}>
                    <p style={{fontSize: "2em"}}>Research Interests</p>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "auto auto", flexBasis: "calc(100% - 500px)", paddingTop: "1.2em", fontSize: "1.2em"}}>
                    <p>Virtual Reality</p>
                    <p>Brain Computer Interaction</p>
                    <p>Human Computer Interaction</p>
                    <p>UX Research</p>
                    <p>Artificial Intelligence</p>
                    <p>Human Perception</p>
                    <p>Haptic Feedback</p>
                    <p>Augmented Reality</p>
                    <p>Machine Learning</p>
                </div>  
            </div>
            <div class="experienceSection">
                <div style={{flexBasis: "500px"}}>
                    <p style={{fontSize: "2em"}}>Experience</p>
                </div>
                <div style={{flexBasis: "calc(80% - 500px)", paddingTop: "1em"}}>
                    <p><a href="https://www.cc.gatech.edu/">Georgia Institute of Technology</a> - Masters in Human Computer Interaction - Aug 2023 to Present</p>
                    <p><a href="https://www.cc.gatech.edu/">Georgia Institute of Technology</a> - VRLandia Research Asssistant - Aug 2023 to Present</p>
                    <p><a href="https://www.mfa.net/">Medical Facilities of America</a> - Full Stack Developer - Jan 2023 to Dec 2023</p>
                    <p><a href="https://www.roanoke.edu/">Roanoke College</a> - Lead Researcher - May 2022 to Sep 2022</p>
                    <p><a href="https://www.roanoke.edu/">Roanoke College</a> - IT Technician - Jan 2020 to Dec 2022</p>
                    <p><a href="https://www.roanoke.edu/">Roanoke College</a> - Bachelors Degree in Computer Science - Aug 2019 to Dec 2022</p>
                </div>  
            </div>
            <div class="darkSection listSection">
                <div style={{flexBasis: "500px"}}>
                    <p style={{fontSize: "2em"}}>A little more about me</p>
                </div>
                <div style={{flexBasis: "calc(100% - 500px)", fontSize: "1.2em", paddingTop: "1.2em"}}>
                    <p>Hello World</p>
                </div>  
            </div>
        </main>
    )
}