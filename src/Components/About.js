import React from 'react';
import "../Styles/About.css"

export default function About(){
    return(
        <main>
            <div class="mainSection">
                <div id="profilePicture">
                    <img src="/pfp.jpg"  class="floating" alt="profile_picture" width="75%" height="75%" style={{borderRadius: "50%", display: "block", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} />
                </div>
                <div id="introText">
                    <p style={{fontSize: "2em"}}>Aaron Gabryluk is an inspired developer and researcher who wants to improve the world with cutting edge technology.</p>
                    <p style={{fontSize: "1em"}}>I am a seasoned user experience researcher with professional full stack development experience. Team player and passionate about UX, XR, educational technology, and game development.</p>
                    <p style={{fontSize: "1em"}}>Skilled at solving multi-layered problems with logical problem solving skills and and quick thinking. Picks up on things quickly, and is always willing to put in the extra effort to understand the problem space.</p>
                    <p style={{fontSize: "1.2em"}}>Currently pursuing my Masters Degree in Human Computer Interaction from Georgia Institute of Technology, and <span style={{fontWeight: "bold", color: "#D90429"}}>I am actively looking for full time employment starting Summer 2025.</span></p>
                </div>
            </div>
            <div class="darkSection experienceSection">
                <div style={{flexBasis: "500px"}}>
                    <p style={{fontSize: "2em"}}>Experience</p>
                </div>
                <div style={{flexBasis: "calc(80% - 500px)", paddingTop: "1em"}}>
                    <p><a href="https://www.indestrl.com/" target="blank">Indestrl</a> - Lead Mixed Reality Developer - May 2024 - Aug 2024</p>
                    <p><a href="https://mshci.gatech.edu/" target="blank">Georgia Institute of Technology</a> - Masters in Human Computer Interaction - Aug 2023 to Present</p>
                    <p><a href="https://vrlandia.gatech.edu/" target="blank">Georgia Institute of Technology</a> - VRLandia Graduate Research Asssistant - Aug 2023 to Present</p>
                    <p><a href="https://www.mfa.net/" target="blank">Medical Facilities of America</a> - Full Stack Developer - Jan 2023 to Dec 2023</p>
                    <p><a href="https://www.roanoke.edu/" target="blank">Roanoke College</a> - Lead Researcher - May 2022 to Sep 2022</p>
                    <p><a href="https://www.roanoke.edu/" target="blank">Roanoke College</a> - IT Technician - Jan 2020 to Dec 2022</p>
                    <p><a href="https://www.roanoke.edu/" target="blank">Roanoke College</a> - Bachelors Degree in Computer Science - Aug 2019 to Dec 2022</p>
                </div>  
            </div>
            <div class="experienceSection">
                <div style={{flexBasis: "500px"}}>
                    <p style={{fontSize: "2em"}}>Publications</p>
                </div>
                <div style={{flexBasis: "calc(90% - 500px)", paddingTop: "1em"}}>
                    <p>Sogani, R., <b>Gabryluk, A.</b>, Raja, V., Gupta, A., Starner, T (2025). <i>Game Mechanics for Sign Language Recognition-based Educational Apps. Intelligent User Interfaces</i> (ACCEPTED)</p>
                    <p>Sogani, R., Gupta, A., <b>Gabryluk, A.</b>, Raja, V (2025). <i>PopSignAI: Integrating Sign Recognition into Gameplay to Teach Sign Language. CHI Student Game Competition</i> (IN REVIEW)</p>
                    <p><b>Gabryluk, A.</b>, Sogani, R., Gupta, A., Raja, V., Starner, T (2025). <i>American Sign Language Games: Analysis on Recognition Performance and Game Mechanisms. MobileHCI</i> (IN REVIEW)</p>
                    
                </div>  
            </div>
            <div class="darkSection listSection">
                <div style={{flexBasis: "500px"}}>
                    <p style={{fontSize: "2em"}}>Research Interests</p>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "auto auto", flexBasis: "calc(100% - 500px)", paddingTop: "1.2em", fontSize: "1.2em"}}>
                    <p class="coolHoverEffect">Virtual Reality</p>
                    <p class="coolHoverEffect">ASL</p>
                    <p class="coolHoverEffect">Human Computer Interaction</p>
                    <p class="coolHoverEffect">UX Research</p>
                    <p class="coolHoverEffect">Artificial Intelligence</p>
                    <p class="coolHoverEffect">EdTech</p>
                    <p class="coolHoverEffect">Haptic Feedback</p>
                    <p class="coolHoverEffect">Augmented Reality</p>
                    <p class="coolHoverEffect">Applied Machine Learning</p>
                </div>  
            </div>
            <div class="listSection">
                <div style={{flexBasis: "500px"}}>
                    <p style={{fontSize: "2em"}}>A little more about me</p>
                </div>
                <div style={{flexBasis: "calc(100% - 500px)", fontSize: "1.2em", paddingTop: "1.2em"}}>
                    <p>I am...</p>
                    <p style={{fontSize: "0.9em"}}>from Lititz, Pennsylvania</p>
                    <p style={{fontSize: "0.9em"}}>an <a href="https://www.16personalities.com/enfj-personality">ENFJ</a> (Extraverted | Intuitive | Feeling | Judging)</p>
                    <p style={{fontSize: "0.9em"}}>an avid fan of videogames and D&D</p>
                    <p style={{fontSize: "0.9em"}}>a proud cat dad and animal lover</p>
                    <br/>
                    <p>I value...</p>
                    <p class="animate-charcter" style={{fontSize: "0.9em"}}>freedom, exploration, change, ambition, and community</p>
                </div>  
            </div>
        </main>
    )
}