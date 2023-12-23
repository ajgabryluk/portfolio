import React, {useState} from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Footer.css"

export default function Footer(){
    const [hovering, setHovering] = useState(0)
    return(
        <footer>
            <div>
                <p>Thanks for stopping by!</p>
                <p class="callToAction">Please feel free to reach out to me via LinkedIn or Email.</p>
            </div>
            <div class="buttonBox">
                <a href="https://www.linkedin.com/in/aarongabryluk/" 
                    onMouseEnter={()=>{setHovering(1)}}
                    onMouseLeave={()=>{setHovering(0)}}
                >
                    <LinkedInIcon fontSize='large' sx={{color:"#D90429", opacity: hovering === 0 || hovering === 1 ? 1 : 0.5}}/>
                </a>
                <a href="mailto:agabryluk3@gatech.edu"
                    onMouseEnter={()=>{setHovering(2)}}
                    onMouseLeave={()=>{setHovering(0)}}
                >
                    <EmailIcon fontSize='large' sx={{color:"#D90429", opacity: hovering === 0 || hovering === 2 ? 1 : 0.5}}/>
                </a>
                <a href="https://github.com/ajgabryluk"
                    onMouseEnter={()=>{setHovering(3)}}
                    onMouseLeave={()=>{setHovering(0)}}
                >
                    <GitHubIcon fontSize='large' sx={{color:"#D90429", opacity: hovering === 0 || hovering === 3 ? 1 : 0.5}}/>
                </a>
            </div>
            <div>
                <p style={{opacity: 0.8}}>&#169;2023 Aaron Gabryluk</p>
                <p style={{opacity: 0.8}}>Built using React and MUI</p>
            </div>
        </footer>
    )
}