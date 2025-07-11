

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import "./Home.css";

function Home() {
    return (
        <div className="home" id='home'>
            <video autoPlay muted loop id="background-video">
                <source src="bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1 className="name">Ilakkiyan J</h1>
            
            <a className="resume" href="https://drive.google.com/file/d/1J6tXCUnQRjDmXo2eyFmJ7eZm9zn2x9Qr/view?usp=sharing" target='__blank'>  
            <h6>Get My Resume{" "}
           
                <DoubleArrowIcon fontSize="small" />
            </h6>
            </a>
        </div>
    );
}

export default Home;
