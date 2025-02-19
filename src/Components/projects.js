import React from 'react';
import ProjectPreview from './ProjectPreview';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../Styles/Projects.css"

const projects = [
    { source: "/QuizletNewFeature.mp4", classification: ["UX Research", "EdTech", "UX Design"], title: "Quizlet Connection Feature", description: "Created a figma prototype showcasing a new feature that could be added to Quizlet in order to help students create mental connections to increase recall." },
    { source: "/PopSignAI.mp4", classification: ["UX Research", "EdTech", "Game Development"], title: "PopSignAI", description: "Conducted UX research and development on the PopSignAI app in order to make it into a production ready experience, in collaboration with Thad Starner's Contextual Computing Group." },
    { source: "/SignBeats.mp4", classification: ["UX Research", "EdTech", "Game Development"], title: "SignBeats", description: "Developing a rhythm game in Unity that teaches American Sign Language through call and response." },
    { source: "/COD-Demo.mp4", classification: ["Game Development", "UX Design"], title: "Count Down of Death - Zombies", description: "Developed and designed a timed, PVE wave arena shooter where the player unlocks new guns and passive upgrades to fight zombies and other ghouls threatening the city." },  
    { source: "/VRLifeSkillsPortfolio.mp4", classification: ["XR", "EdTech"], title: "VR Life Skills Training", description: "Developed a virtual tool for special education students to safely and explore and learn how to properly perform house hold responsibilities like washing dishes and vacuuming." },
    { source: "/ARNavigation.mp4", classification: ["XR", "UX Research"], title: "AR Navigation of Indoor Spaces", description: "Created an application for the Meta Quest 3 using their passthrough feature to experiment on the effects of story telling for indoor navigation." },
    { source: "/FanduelProject.mp4", classification: ["UX Research", "UX Design"], title: "Fanduel Highlight Reels", description: "Utilizing generative AI to improve the user experience of Fanduel Daily Fantasy Sports users by creating a highlight reel which visualizes their stats after games." },
    { source: "/TownWithOmni.mp4", classification: ["XR", "UX Research"], title: "VR Omni Treadmill Experiment", description: "Assisted the Georgia Tech VR Landia lab with implementing the Virtuix Omni-Treadmill into their Unity project. Continuing to assist with navigation scripting." },
    { source: "/UnrealRollerCoaster.mp4", classification: ["XR", "UX Research"], title: "Haptic Feedback Presence Experiment", description: "Studied the effects of haptic feedback on presence utilizing B-Haptics vest to simulate movement and EEG to measure their level of presence." }
  ];

export default function Projects(){
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.classification.includes(filter));

    return(
        <div class="main">
            <div class="projectSelect">
                <div onClick={(e) =>  setFilter("All")} style={{padding: "0px 16px 0px 0px"}}>
                    <p class={`projectSelectFilter ${filter === "All" ? "activeFilter" : ""}`}>All</p>
                </div>
                <div onClick={(e) => setFilter("UX Research")} style={{padding: "0px 16px 0px 0px"}}>
                    <p class={`projectSelectFilter ${filter === "UX Research" ? "activeFilter" : ""}`}>UX Research</p>
                </div>
                <div onClick={(e) => setFilter("UX Design")} style={{padding: "0px 16px 0px 0px"}}>
                    <p class={`projectSelectFilter ${filter === "UX Design" ? "activeFilter" : ""}`}>UX Design</p>
                </div>
                <div onClick={(e) => setFilter("Game Development")} style={{padding: "0px 16px 0px 0px"}}>
                    <p class={`projectSelectFilter ${filter === "Game Development" ? "activeFilter" : ""}`}>Game Development</p>
                </div>
                <div onClick={(e) => setFilter("XR")} style={{padding: "0px 16px 0px 0px"}}>
                    <p class={`projectSelectFilter ${filter === "XR" ? "activeFilter" : ""}`}>XR</p>
                </div>
                <div onClick={(e) => setFilter("EdTech")} style={{padding: "0px 16px 0px 0px"}}>
                    <p class={`projectSelectFilter ${filter === "EdTech" ? "activeFilter" : ""}`}>EdTech</p>
                </div>
            </div>
            {/* <select onChange={(e) => setFilter(e.target.value)} className="mb-4 p-2 border rounded">
                <option value="All">All</option>
                <option value="Web">Web</option>
                <option value="Mobile">Mobile</option>
                <option value="AI">AI</option>
            </select> */}
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <ProjectPreview key={project.title} {...project} />
                    ))}
                </AnimatePresence>
        </div>
    )
}