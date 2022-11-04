import "./search.scss";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Search = ({ search, setSearch }) => {
	const [searchInput, setSearchInput] = useState("");

	const handlerSearch = (e) => {
		setSearchInput(e.target.value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		setSearch(searchInput);
		setSearchInput("");
	};

	return (
		<div className="row">
			<form
				className="input-field col s6"
				onSubmit={handlerSubmit}>
				<input
					placeholder="Search film"
					onChange={handlerSearch}
					value={searchInput}
					id="search"
					type="text"
					className="validate"
				/>
				<label
					className="active"
					htmlFor="search">
					Search films
				</label>
			</form>
		</div>
	);
};

Search.propTypes = {
	searchInput: PropTypes.string,
};

export default Search;
