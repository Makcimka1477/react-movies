import "./footer.scss";

const Footer = () => {
	return (
		<footer className="page-footer red lighten-3">
			<div className="container">
				<div className="footer-copyright red lighten-3">
					<div className="container">
						{new Date().getFullYear()} Copyright Text
						<a
							className="grey-text red lighten-3 text-lighten-4 right"
							href="#!">
							More Links
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
