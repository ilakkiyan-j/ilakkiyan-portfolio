import TechStack from "./TechStack";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EventIcon from '@mui/icons-material/Event';

export default function Projects(props) {
    return (
        <div className="Project">
           
            <div className="Title">
              <div className="title">
                <h2>
                {props.heading} 
               </h2>
                    {props.url && (
                        <a href={props.url} target="_blank" rel="noopener noreferrer">
                            <OpenInNewIcon aria-label="Open Project Link"  className="openIcon"/>
                        </a>
                    )}
             </div>
                <span>
                <EventIcon className="calender"/> <span>{props.date}</span>
                </span>
            </div>
            <div className="divide"></div>
            <div className="Stacks">
                {props.techStack.map((item, index) => (
                    <TechStack key={index} title={item} />
                ))}
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
        </div>
    );
}
