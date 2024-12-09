


export default function Certificate(props) {
  return (
    <div className="Certificate">
      {/* Image Container */}
      <div className="img-container">
        <img
          src={`certificates/${props.url}.png`}
          alt={props.name}
          className="certificate-img"
        />
      </div>

      {/* Description Container */}
      <div className="description-container">
        <h1>{props.name}</h1>
        <h6>{props.provider}</h6>
        <span>{props.date}</span>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div className="view-button">
            <span>View Certificate</span>
          </div>
        </a>
      </div>
    </div>
  );
}
