import "./movies.scss";
import Movie from "./Movie";
import Preloader from "../../Preloader";

const Movies = ({ films, search, loader }) => {
	return (
		<div className="row">

			{films ? (
				films.map((el) => (
					<Movie
						title={el.Title}
						type={el.Type}
						year={el.Year}
						id={el.imdbID}
						key={el.imdbID}
						img={el.Poster}
					/>
				))
			) : (
				<h3 style={{ margin: "0 auto" }}>Search the film</h3>
			)}
		</div>
	);
};

export default Movies;
