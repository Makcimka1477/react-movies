import "./filters.scss";

const Filters = ({ type, setType }) => {
	const handlerRadio = (e) => {
		setType((state) => e.target.value);
	};

	return (
		<div className="filters">
			<p>
				<label>
					<input
						onChange={handlerRadio}
						value="all"
						className="with-gap"
						name="aa"
						type="radio"
						checked={type === "all"}
					/>
					<span>ALL</span>
				</label>
			</p>
			<p>
				<label>
					<input
						onChange={handlerRadio}
						value="movie"
						className="with-gap"
						name="aa"
						type="radio"
						checked={type === "movie"}
					/>
					<span>MOVIES</span>
				</label>
			</p>
			<p>
				<label>
					<input
						onChange={handlerRadio}
						value="series"
						className="with-gap"
						name="aa"
						type="radio"
						checked={type === "series"}
					/>
					<span>SERIES</span>
				</label>
			</p>
		</div>
	);
};

export default Filters;
