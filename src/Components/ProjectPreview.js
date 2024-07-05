import React from 'react';

export default function ProjectPreview({source, classification, title, description}){
    return(
    <div class="projectContainer">
        {source.split(".").pop() === "mp4" ? 
        <video controls autoPlay muted loop class="projectImage">
            <source src={source} type="video/mp4"/>
        </video>
        :
        <img src={source} alt="Coming Soon Gif" class="projectImage"/>
        }
        <p>{classification}</p>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    )
}