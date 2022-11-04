import "./movie.scss";

const Movie = ({ img, title, year, type }) => {
	if (img == "N/A") {
		img = "https://via.placeholder.com/220x400/FF0000/FFFFFF";
	}

	return (
		<div className="col xs6 l4 m4 s10 xl3 align-center hoverable">
			<div className="card small">
				<div className="card-image">
					<img
						src={img}
						alt="card"
					/>
					<span className="card-title title">{title}</span>
				</div>
				<div className="card-content">
					<p>
						{type} {year}
					</p>
				</div>
				<div className="card-action">
					<a href="#">Link on the film</a>
				</div>
			</div>
		</div>
	);
};

export default Movie;
