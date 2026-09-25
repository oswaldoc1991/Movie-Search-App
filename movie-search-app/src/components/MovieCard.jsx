function MovieCard({ title, description, rating }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Rating: {rating}/10</p>
        </div>
    );
}

export default MovieCard;