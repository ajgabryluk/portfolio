import React from 'react';
import ProjectPreview from './ProjectPreview';
import "../Styles/Projects.css"

export default function Projects(){
    return(
        <div class="main">
            <ProjectPreview 
                source={"/FanduelProject.mp4"} 
                classification={"01 - UX Research / UX Design / Generative AI"} 
                title={"Fanduel Highlight Reels"} 
                description={"Utilizing generative AI to improved the user experience of Fanduel Daily Fantasy Sports users by creating a highlight reel which visualizes their stats after games."}
            />
            <ProjectPreview 
                source={"/TownWithOmni.mp4"} 
                classification={"02 - VR / UX Research / In Progress"} 
                title={"VR Omni Treadmill Experiment"} 
                description={"Assisted the Georgia Tech VR Landia lab with implementing the Virtuix Omni-Treadmill into their Unity project. Continuing to assist with navigation scripting."}
            />
            <ProjectPreview 
                source={"/FanduelProject.mp4"} 
                classification={"Classification"} 
                title={"title"} 
                description={"description"}
            />
            <ProjectPreview 
                source={"/FanduelProject.mp4"} 
                classification={"Classification"} 
                title={"title"} 
                description={"description"}
            />
        </div>
    )
}