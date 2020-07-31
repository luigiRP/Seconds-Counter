import React from "react";
import CardSymbol from "./cardSymbol.js";

export default class Card extends React.Component {
	constructor(props) {
		super();
		this.state = {
			count1: 0,
			count2: 0,
			count3: 0,
			count4: 0,
			count5: 0,
			count6: 0
		};
	}

	componentDidMount() {
		this.getTime = setInterval(() => {
			if (this.state.count5 === 9) {
				this.setState({ count5: 0 });
				this.setState({ count6: this.state.count6 + 1 });
			}
			if (this.state.count4 === 9) {
				this.setState({ count4: 0 });
				this.setState({ count5: this.state.count5 + 1 });
			}
			if (this.state.count3 === 9) {
				this.setState({ count3: 0 });
				this.setState({ count4: this.state.count4 + 1 });
			}
			if (this.state.count2 === 9) {
				this.setState({ count2: 0 });
				this.setState({ count3: this.state.count3 + 1 });
			}
			if (this.state.count1 === 9) {
				this.setState({ count1: 0 });
				this.setState({ count2: this.state.count2 + 1 });
			} else {
				this.setState({
					count1: this.state.count1 + 1
				});
			}
		}, 1000);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<CardSymbol />
					<div className="card col-1 bg-dark my-5 mx-3">
						<div className="card-body">
							<h5 className="card-title text-white text-center my-auto">
								{this.state.count6}
							</h5>
						</div>
					</div>
					<div className="card col-1 bg-dark my-5 mx-3">
						<div className="card-body">
							<h5 className="card-title text-white text-center my-auto">
								{this.state.count5}
							</h5>
						</div>
					</div>
					<div className="card col-1 bg-dark my-5 mx-3">
						<div className="card-body">
							<h5 className="card-title text-white text-center my-auto">
								{this.state.count4}
							</h5>
						</div>
					</div>
					<div className="card col-1 bg-dark my-5 mx-3">
						<div className="card-body">
							<h5 className="card-title text-white text-center my-auto">
								{this.state.count3}
							</h5>
						</div>
					</div>
					<div className="card col-1 bg-dark my-5 mx-3">
						<div className="card-body">
							<h5 className="card-title text-white text-center my-auto">
								{this.state.count2}
							</h5>
						</div>
					</div>
					<div className="card col-1 bg-dark my-5 mx-3">
						<div className="card-body">
							<h5 className="card-title text-white text-center my-auto">
								{this.state.count1}
							</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
