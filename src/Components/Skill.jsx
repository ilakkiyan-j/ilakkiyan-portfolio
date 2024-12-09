

function Skill(props){
    return(
        <div className="Skill">
            <img src={"skills/"+props.uri} alt="" className="img"/>
            <span>{props.heading}</span>
        </div>
    );
}

export default Skill;