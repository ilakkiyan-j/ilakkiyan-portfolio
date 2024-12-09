

function Tracks({ title, url, className }) {
    return (
        <div className={`track-card ${className}`}>
            <div className="background-image" style={{ backgroundImage: `url(${url})` }}>
                <div className="text-overlay">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default Tracks;
