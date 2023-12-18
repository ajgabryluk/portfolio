import React from 'react';

export default function ProjectPreview({source, classification, title, description}){
    return(
    <div class="projectContainer">
        <video controls autoPlay muted loop class="projectImage">
            <source src={source} type="video/mp4"/>
        </video>
        <p>{classification}</p>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    )
}