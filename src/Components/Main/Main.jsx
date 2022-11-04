import "./main.scss";

import { useEffect, useMemo, useState } from "react";
import Search from "./Search";
import useFetch from "../../servicesHook/useFetch";
import Movies from "./Movies";
import Preloader from "../Preloader";
import ErrorBoundary from "../ErrorBoundary";
import Filters from "./Filters/Filters";

const Main = () => {
	const { loader, error, getFilmData } = useFetch();
	const [films, setFilms] = useState(null);
	const [type, setType] = useState("all");
	const [search, setSearch] = useState("matrix");

	const handlerRadio = (e) => {
		setType((state) => e.target.value);
	};

	const getFilms = () => {
		getFilmData(search, type).then((data) => setFilms((state) => data));
	};

	useEffect(() => {
		getFilms();
	}, []);

	useEffect(() => {
		getFilms();
	}, [type, search]);

	const errorComp = error && !loader && <h4>Some error</h4>;
	const moviesComp =
		!loader && !error && films ? (
			<Movies
				loader={loader}
				films={films}
				search={search}
			/>
		) : null;
	const loaderComp = loader && !error ? <Preloader /> : null;

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

			<div className="container inputs">
				<ErrorBoundary>
					<Filters
						type={type}
						setType={setType}
					/>
				</ErrorBoundary>
			</div>

			<div className="container main red-text text-lighten-3">
				{loaderComp}
				{errorComp}
				{moviesComp}
			</div>
		</main>
	);
};

export default Main;
