import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {useState, useEffect} from "react";
import ProjectDetailsModal from './ProjectDetailsModal';


export default function ProjectPreview({ source, classification, title, description, more }) {
    const [data, setData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false)

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    useEffect(() => {
        fetch("./ProjectDescriptions.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData[title]))
        .catch((error) => console.error("Error loading JSON:", error));
    }, []);

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
            {more ? 
                <>
                    <button onClick={()=>{
                            modalOpen ? close() : open()
                        }} 
                        class={"moreButton"}
                    >
                        See More
                    </button>
                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={()=>null}
                    >
                        {modalOpen && <ProjectDetailsModal title={title} modalOpen={modalOpen} handleClose={close} details={data}/>}
                    </AnimatePresence>
                </>    
                : 
                <></>
            }
        </motion.div>
    );
}