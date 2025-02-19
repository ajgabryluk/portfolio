import React from 'react';
import { motion } from "framer-motion";

export default function ProjectPreview({ source, classification, title, description }) {
    return (
        <motion.div 
            className="projectContainer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            {source.split(".").pop() === "mp4" ? (
                <video controls autoPlay muted loop className="projectImage">
                    <source src={source} type="video/mp4" />
                </video>
            ) : (
                <img src={source} alt="Coming Soon Gif" className="projectImage" />
            )}
            <p>{classification.join(" / ")}</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </motion.div>
    );
}