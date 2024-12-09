
function Stats(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="stats">
                <img className="stats-img" src={props.url} alt="" />
                <p>{props.title}</p>
            </div>
        </a>
    );
}

export default Stats;
