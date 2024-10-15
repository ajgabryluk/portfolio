import React from 'react';
import ProjectPreview from './ProjectPreview';
import "../Styles/Projects.css"

export default function Projects(){
    return(
        <div class="main">
        <ProjectPreview 
                source={"/PopSignAI.mp4"} 
                classification={"01 - Applied ML / Unity / UX Research / ASL / EdTech"} 
                title={"PopSignAI"} 
                description={"Conducted UX research and development on the PopSignAI app in order to make it into a production ready experience, in collaboration with Thad Starner's Contextual Computing Group."}
            />
        <ProjectPreview 
                source={"/SignBeats.mp4"} 
                classification={"02 - Applied ML / Unity / ASL / EdTech"} 
                title={"SignBeats"} 
                description={"Developing a rhythm game in Unity that teaches American Sign Language through call and response."}
            />
         <ProjectPreview 
                source={"/VRLifeSkillsPortfolio.mp4"} 
                classification={"03 - VR / Unity / Project Management / EdTech"} 
                title={"VR Life Skills Training"} 
                description={"Developed a virtual tool for special education students to safely and explore and learn how to properly perform house hold responsibilities like washing dishes and vacuuming."}
            />
            <ProjectPreview 
                source={"/ARNavigation.mp4"} 
                classification={"04 - AR / UX Research / Unity / Navigation"} 
                title={"AR Navigation of Indoor Spaces"} 
                description={"Created an application for the Meta Quest 3 using their passthrough feature to experiment on the effects of story telling for indoor navigation."}
            />
            <ProjectPreview 
                source={"/FanduelProject.mp4"} 
                classification={"05 - UX Research / UX Design / Generative AI"} 
                title={"Fanduel Highlight Reels"} 
                description={"Utilizing generative AI to improved the user experience of Fanduel Daily Fantasy Sports users by creating a highlight reel which visualizes their stats after games."}
            />
            <ProjectPreview 
                source={"/TownWithOmni.mp4"} 
                classification={"06 - VR / UX Research / Unity / Spatial Memory"} 
                title={"VR Omni Treadmill Experiment"} 
                description={"Assisted the Georgia Tech VR Landia lab with implementing the Virtuix Omni-Treadmill into their Unity project. Continuing to assist with navigation scripting."}
            />
            <ProjectPreview 
                source={"/UnrealRollerCoaster.mp4"} 
                classification={"05 - VR / UX Research / Unreal Engine 5 / EEG"} 
                title={"Haptic Feedback Presence Experiment"} 
                description={"Studied the effects of haptic feedback on presence utilizing B-Haptics vest to simulate movement and EEG to measure their level of presence."}
            />
        </div>
    )
}