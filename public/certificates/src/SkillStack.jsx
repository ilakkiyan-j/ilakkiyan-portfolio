import './SkillStack.css';
import Skill from "./Components/Skill";

var skillSet = [
    { heading: "HTML", uri: "html.svg", type: "web" },
    {heading: "CSS", uri: "css.svg", type: "web" },
    {heading: "JavaScript", uri: "js.svg", type: "web" },
    { heading: "Bootstrap", uri: "bootstrap.svg", type: "web" },
    { heading: "React", uri: "react.svg", type: "web" },
    {heading: "Node.js", uri: "node-js.svg", type: "web" },
    { heading: "Express.js", uri: "express-js.svg", type: "web" },
    { heading:"PostgreSQL", uri: "postgresql.svg", type: "web" },
    { heading: "MySQL", uri: "mysql.svg", type: "web" },
    { heading: "EJS", uri: "ejs.svg", type: "web" },
    {heading:"Git", uri: "git.svg", type: "software" },
    { heading:"Postman", uri: "postman.svg", type: "software" },
    { heading: "C", uri: "c.svg", type: "software" },
    { heading: "C++", uri: "c++.svg", type: "software" },
    { heading: "Java", uri: "java.svg", type: "software" },
    {heading: "Python", uri: "python.svg", type: "software" },
    { heading: "Figma", uri: "figma.svg", type: "ui/ux" },
    { heading: "Canva", uri: "canva.svg", type: "ui/ux" },
    { heading: "Spreadsheets", uri: "spreadsheets.svg", type: "data" },
    { heading: "Tableau", uri: "tableau.svg", type: "data" },
];


function SkillStack() {
    return (
        <div className="SkillStack" id="skills">
                <h1>Technical Skills</h1>
                <div className="skillset">
                    {skillSet.map((skill, index) => (
                        <Skill key={index} uri={skill.uri} heading={skill.heading} />
                    ))}
                </div>
        </div>
    );
}

export default SkillStack;