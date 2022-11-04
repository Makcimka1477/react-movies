import "./main.scss";

import { useEffect, useMemo, useState } from "react";
import Search from "./Search";
import useFetch from "../../servicesHook/useFetch";
import Movies from "./Movies";
import PropTypes from "prop-types";
import Preloader from "../Preloader";
import ErrorBoundary from "../ErrorBoundary";
import Filters from "./Filters/Filters";

const Main = () => {
	const { loader, error, getFilmData } = useFetch();

	// const [films, setFilms] = useState([]);
	const [films, setFilms] = useState(null);
	const [type, setType] = useState("all");
	const [search, setSearch] = useState("matrix");

	const handlerRadio = (e) => {
		setType((state) => e.target.value);
	};

	useEffect(() => {
		getFilmData(search, type).then((data) => setFilms((state) => data));
	}, []);

	useEffect(() => {
		getFilmData(search, type).then((data) => setFilms((state) => data));
	}, [type, search]);

	const err = error && !loader && <h4>Ошибка</h4>;
	const mov =
		!loader && !error && films ? (
			<Movies
				loader={loader}
				films={films}
				search={search}
			/>
		) : null;
	const load = loader && !error ? <Preloader /> : null;

	return (
		<main className="main">
			<div className="container">
				<ErrorBoundary>
					<Search
						search={search}
						setSearch={setSearch}
					/>
				</ErrorBoundary>
			</div>

			<div
				style={{ marginBottom: "30px" }}
				className="container inputs">
				<ErrorBoundary>
					<Filters
						type={type}
						setType={setType}
					/>
				</ErrorBoundary>
			</div>

			<div className="container main red-text text-lighten-3">
				{load}
				{err}
				{mov}
			</div>
		</main>
	);
};

Main.propTypes = {
	films: PropTypes.array,
	type: PropTypes.string,
	search: PropTypes.string,
};

export default Main;
