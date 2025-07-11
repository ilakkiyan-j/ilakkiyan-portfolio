import GitHubIcon from '@mui/icons-material/GitHub';
import Projects from "./Components/Projects";
import "./Project.css";

export default function Project() {
    const ProjectList = [
        {
            heading: "ATM Interface",
            url: "https://github.com/ilakkiyan-j/OctaNet",
            date: "Jun.12, 2024",
            techStack: ["Java"],
            description: "A console-based application developed using object-oriented programming principles.",
            type: "software",
        },
        {
            heading: "Weather Forecasting website",
            url: "https://github.com/ilakkiyan-j/Weather-Forecasting-Website",
            date: "Apr.11, 2024",
            techStack: ["HTML", "CSS", "Js"],
            description: "A weather forecasting website connected to the OpenWeatherMap API.",
            type: "web",
        },
        {
            heading: "Blog Web Application",
            url: "https://github.com/ilakkiyan-j/Blog-web-app",
            date: "Sep.14, 2024",
            techStack: ["EJS", "CSS", "Js", "BootStrap"],
            description: "A blog website where users can create, publish, and manage blog posts.",
            type: "web",
        },
        {
            heading: "Quilora",
            url: "https://github.com/ilakkiyan-j/Quillora",
            date: "Oct.29, 2024",
            techStack: ["Ejs", "css", "JavaScript", "Bootstrap", "Node.js", "Express.js", "Multer", "PostgreSQL"],
            description: "A bookNotes website for sharing your notes among a particular book of yours, connected end-to-end.",
            type: "web",
        },
        {
            heading: "App design - Nexaid",
            url: "https://www.figma.com/community/file/1446739000422112585/nexaid",
            date: "Mar.5, 2024",
            techStack: ["Figma"],
            description: "A prototype application designed to facilitate communication during ad-hoc situations.",
            type: "ui/ux",
        },
        {
            heading: "Web design - Quillora",
            url: "https://www.figma.com/community/file/1446743309828571466",
            date: "Oct.20, 2024",
            techStack: ["Figma"],
            description: "A web design for my book notes platform, enabling users to create and manage notes on their books.",
            type: "ui/ux",
        },
        {
            heading: "WireFrame - Portfolio",
            url: "",
            date: "Nov.28, 2024",
            techStack: ["Figma"],
            description: "A wireframe design for a personal portfolio website.",
            type: "ui/ux",
        },
        {
            heading: "Sales Data Analysis",
            url: "",
            date: "Sep.25, 2024",
            techStack: ["Tableau", "Spreadsheets"],
            description: "A dynamic dashboard designed to visualize and analyze sales data effectively.",
            type: "data",
        },
    ];

    return (
        <div className="project" id="project">
            <div className="head">
                <h1>Projects</h1>
                <div className="github">

                    <a href="https://github.com/ilakkiyan-j" target='__blank'>
                    <span>
                        <GitHubIcon /> <p>See More!</p>
                    </span>
                    </a>
                </div>
                </div>
                <div className="project-container">
                    {ProjectList.map((item, index) => (
                        <Projects
                            key={index}
                            heading={item.heading}
                            url={item.url}
                            date={item.date}
                            techStack={item.techStack}
                            description={item.description}
                        />
                    ))}
                </div>
            
        </div>
    );
}
