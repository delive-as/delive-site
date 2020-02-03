// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import droneStandby from "../../images/drone/droneStandby.png";

// Import Generic components
import Partner from "./Partner";
import Purpose from "./Purpose";
import Solution from "./Solution";
import Trial from "./Trial";
import Action from "./Action";
import Team from "./Team";
import Latest from "./Latest";
import Contact from "./Contact";
import Subscribe from "./Subscribe";

// Import Css
import "./animate.css";
import "./animations-delay.css";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}
	openModal() {
		this.setState({ isOpen: true });
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scrollNavigation, true);
	}

	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollNavigation);
	}

	scrollNavigation = () => {
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
		if (top > 80) {
			document.getElementById("topnav").classList.add("nav-sticky");
		} else {
			document.getElementById("topnav").classList.remove("nav-sticky");
		}
	};

	render() {
		return (
			<React.Fragment>
				{/* Hero Start */}
				<section
					className="bg-home"
					style={{ color: "#d81935" }}
					id="home"
				>
					<div className="home-center">
						<div className="home-desc-center">
							<div className="container">
								<Row className="justify-content-center">
									<Col
										md={9}
										className="text-center mt-0 mt-md-5 pt-0 pt-md-5"
									>
										<div className="title-heading margin-top-50">
											<h1 className="display-4 font-weight-bold mb-3 text-secondary animated fadeInDownBig animation-delay-3">
												De
												<span className="text-primary">
													Live
												</span>{" "}
												Drones
											</h1>
											<p className="para-desc mx-auto text-muted animated fadeInUpBig animation-delay-4">
												<span className="text-primary">
													Revolutionizing
												</span>{" "}
												<span className="text-secondary">
													emergency medical services
													with drone{" "}
													<span className="text-primary">
														fly-ahead
													</span>{" "}
													technology.
												</span>{" "}
											</p>
											<div className="watch-video mt-4 pt-2">
												<div className="animated fadeInUpBig animation-delay-7">
													<Link
														onClick={this.openModal}
														to="#"
														className="video-play-icon watch text-dark"
													>
														<i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i>{" "}
														WATCH VIDEO
													</Link>
												</div>
												<ModalVideo
													channel="youtube"
													isOpen={this.state.isOpen}
													videoId="EJ-QtB2iPVU"
													onClose={() =>
														this.setState({
															isOpen: false
														})
													}
												/>
											</div>
										</div>
										<div className="home-dashboard animated fadeInUpBig animation-delay-11">
											<img
												src={droneStandby}
												alt=""
												className="img-fluid mover"
											/>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</section>

				{/* Partner */}
				<section id="partner">
					<Partner />
				</section>

				{/* Purpose */}
				<section id="purpose">
					<Purpose />
				</section>

				{/* Solution */}
				<section id="solution">
					<Solution />
				</section>

				{/* Trial */}
				<section id="trial">
					<Trial />
				</section>

				{/* Action */}
				<section id="action">
					<Action />
				</section>

				{/* Team */}
				<section id="team">
					<Team />
				</section>

				{/* Latest */}
				<section id="latest">
					<Latest />
				</section>

				{/* Contact */}
				<section id="contact">
					<Contact />
				</section>

				{/* Subscribe */}
				<section id="subscribe">
					<Subscribe />
				</section>
			</React.Fragment>
		);
	}
}

export default Index;
