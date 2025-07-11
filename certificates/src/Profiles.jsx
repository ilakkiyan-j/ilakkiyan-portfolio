import "./Profiles.css";
import Stats from "./Components/Stats";
import "./SkillStack.css";

function Profiles() {
    const profs = [
      
        { url: "stats/codechef.svg", title:"CodeChef" ,link:"https://www.codechef.com/users/ilakkiyanj03"},
        { url: "stats/leetcode.svg" , title:"LeetCode",link:"https://leetcode.com/u/ilakkiyanj/"},
        { url: "stats/gfg.svg" , title:"Geeks for Geeks",link:"https://www.geeksforgeeks.org/user/ilakkiyanj03/"}
      
    ];

    return (
        <div className="stats-container">
            <h1 className="stats-header">My Coding Profiles</h1>
            <div className="stats-wrapper">
                {profs.map((props, index) => (
                    <Stats key={index} url={props.url} title={props.title} link={props.link}/>
                ))}
            </div>
        </div>
    );
}

export default Profiles;
