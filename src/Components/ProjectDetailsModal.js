import {motion} from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import Backdrop from "./Backdrop";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectDetailsModal = ({handleClose, title, details}) => {
    const dropIn = {
        hidden:{
            y: "-100vh",
            opacity:0,
        },
        visible:{
            y:"0",
            opacity:1,
            transition:{
                duration: 2,
                type: "spring",
                damping:25,
                stiffness: 300
            }
        },
        exit:{
            y: "100vh",
            opacity: 0,
        }
    }

    return(
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e)=>e.stopPropagation()}
                className="projectModal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h2>{title}</h2>
                {details["video"].split(".").pop() === "mp4" ? (
                <video controls autoPlay muted loop className="projectImage">
                    <source src={details["video"]} type="video/mp4" />
                </video>
                ) : (
                    <img src={details["video"]} alt="Coming Soon Gif" className="projectImage" />
                )}
                <p>{details["description"]}</p>
                <h3 style={{alignSelf: "flex-start"}}>Image Gallery</h3>
                <Carousel interval={6000} pause={false}>
                    {details["images"].map((src, index) => (
                        <Carousel.Item>
                            <img src={src} alt={src}/>
                            <Carousel.Caption className="custom-caption">
                                <p>{details["imageDescriptions"][index]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                    </Carousel>
            </motion.div>
        </Backdrop>
    );
}
export default ProjectDetailsModal;