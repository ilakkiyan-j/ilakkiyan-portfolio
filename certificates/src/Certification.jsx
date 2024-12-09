import "./Certification.css";
import Certificate from "./Components/Certificate";
import { useState, useEffect } from "react";

export default function Certification() {
  const certificates = [
    {
      name: "Avantaa'24 Intel Gen AI workshop",
      provider: "Sri Krishna College of Technology, Coimbatore",
      date: "Mar.8, 2024",
      url: "workshop",
      link: "#",
    },
    {
      name: "Avantaa'24 Intel Project Expo",
      provider: "Sri Krishna College of Technology, Coimbatore",
      date: "Mar.9, 2024",
      url: "ProjExpo",
      link: "#",
    },
    {
      name: "Python",
      provider: "Kaggle",
      date: "Feb.6, 2024",
      url: "python",
      link: "https://www.kaggle.com/learn/certification/ilakkiyanj/python",
    },
    {
      name: "Problem Solving Basic",
      provider: "HackerRank",
      date: "Sep.11, 2024",
      url: "problemSolving_basic",
      link: "https://www.hackerrank.com/certificates/1bf2949fc7fb",
    },
    {
      name: "Java Basic",
      provider: "HackerRank",
      date: "May.2, 2024",
      url: "java_basic",
      link: "https://www.hackerrank.com/certificates/8dfc4534cd2c",
    },
    {
      name: "SQL Basic",
      provider: "HackerRank",
      date: "Sep.25, 2024",
      url: "SQL_basic",
      link: "https://www.hackerrank.com/certificates/1d644a9d5b27",
    },
    {
      name: "The Complete 2024 Web Development Bootcamp",
      provider: "Udemy",
      date: "Nov.27, 2024",
      url: "webDevelopment",
      link: "https://www.udemy.com/certificate/UC-3b7af561-32af-434f-91f7-49b94b60fc17/",
    },
    {
      name: "Get Started with Figma",
      provider: "Coursera",
      date: "Feb.20, 2024",
      url: "Figma",
      link: "https://www.coursera.org/account/accomplishments/verify/S3LRJJC4TRRA",
    },
    {
      name: "Digital Skills: User Experience",
      provider: "FutureLearn",
      date: "Oct.2, 2024",
      url: "ux",
      link: "https://www.futurelearn.com/certificates/nfsfqrr",
    },
    {
      name: "Introduction to Data Analytics",
      provider: "Coursera",
      date: "Aug.18, 2024",
      url: "Data_analytics",
      link: "https://coursera.org/share/557227cd64f7111868b14f4d050739f4",
    },
    {
      name: "Data Analysis with Spreadsheets and SQL",
      provider: "Coursera",
      date: "Sep.29, 2024",
      url: "Data_analysis",
      link: "https://coursera.org/share/768213b7995da686fcdb2b7362414f91",
    },
    {
      name: "Introduction to Data Management",
      provider: "Coursera",
      date: "Nov.8, 2024",
      url: "Data_management",
      link: "https://coursera.org/share/7ec2ebb5764031fa5a45e2523168fc4a",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < certificates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < certificates.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); 
      }
    }, 5000);
    return () => clearInterval(interval); 
  }, [currentIndex, certificates.length]);

  return (
    <div className="certification-section" id="certificate">
      <div className="heading">
        <h1>Certifications</h1>
      </div>
      <button
          className="scroll-button left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>
      <div className="certification-carousel">
        <div
          className="certification-container"
          style={{
            transform: `translateX(-${currentIndex * 1200}px)`
          }}
        >
          {certificates.map((cert, index) => (
            <Certificate
              key={index}
              name={cert.name}
              provider={cert.provider}
              date={cert.date}
              url={cert.url}
              link={cert.link}
            />
          ))}
        </div>

      </div>
              <button
          className="scroll-button right"
          onClick={handleNext}
          disabled={currentIndex === certificates.length - 1}
        >
          &#8250;
        </button>
    </div>
  );
}
