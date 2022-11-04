import { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		this.setState((state) => ({
			error: error,
			errorInfo: errorInfo,
		}));
	}

	render() {
		// if (this.state.errorInfo) {
		if (this.state.error) {
			// Error path
			return (
				<div style={{ marginBottom: "30px" }}>
					<h4 style={{ color: "red", position: "relative" }}>
						Something went wrong.
						<img
							style={{ height: "80px", position: "absolute", left: "-100px" }}
							src="../../images/errorBoundary.png"
							alt="error"
						/>
					</h4>
					<details style={{ color: "red", whiteSpace: "pre-wrap" }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details>
				</div>
			);
		}
		// Normally, just render children
		return this.props.children;
	}
}

export default ErrorBoundary;
