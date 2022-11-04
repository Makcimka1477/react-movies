import "./header.scss";

const Header = () => {
	return (
		<header>
			<nav>
				<div className="nav-wrapper red lighten-3">
					<a
						href="#"
						className="brand-logo">
						React Movies
					</a>
					<ul
						id="nav-mobile"
						className="right hide-on-med-and-down">
						<li>
							<a href="#">#####</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
