import { useState, useEffect } from "react";
import "./About.css";
import Tracks from "./Components/Tracks";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function About() {
    const tracks = [
        { title: "Software Development", url: "tracks/software.jpg" },
        { title: "Full Stack Development", url: "tracks/web.jpg" },
        { title: "UI/UX Design", url: "tracks/ui.png" },
        { title: "Data Analytics", url: "tracks/data.webp" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const getClassName = (index) => {
        const diff = (index - currentIndex + tracks.length) % tracks.length;

        if (diff === 0) return "center"; // Current card
        if (diff === 1) return "right";  // Next card
        if (diff === tracks.length - 1) return "left"; // Previous card
        return "hidden"; // All other cards
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Auto slide
        return () => clearInterval(interval);
    }, []); // Runs once

    return (
        <div className="about" id="about">
            <div className="content">
                <h2>About Me</h2>
                <p>
                    I am a student and aspiring software developer from Coimbatore, with a strong interest in software development, full-stack development, UI/UX design, and data analysis.
                    I am focused on building a solid foundation in technology and design while exploring innovative solutions to complex challenges. Committed to continuous learning,
                    I aim to contribute effectively to the tech industry and grow as a versatile professional capable of addressing diverse needs.
                </p>
            </div>

            <div className="tracks-container">
                <h3>My Career Tracks</h3>
                <div className="tracks">
                    {tracks.map((track, index) => {
                        const className = getClassName(index);
                        return (
                            <Tracks
                                key={index}
                                title={track.title}
                                url={track.url}
                                className={`track-card ${className}`}
                            />
                        );
                    })}
                </div>
                <button onClick={prevSlide}><ArrowBackIosIcon className="arrow-pre"/></button>
                <button onClick={nextSlide}><ArrowForwardIosIcon /></button>
            </div>
        </div>
    );
}

export default About;
