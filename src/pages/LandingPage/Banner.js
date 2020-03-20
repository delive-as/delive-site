import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Particles from "react-particles-js";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import "../../css/animate.css";
import "../../css/animations-delay.css";

import droneStandby from "../../images/drone/droneStandby.png";

class Banner extends Component {
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

	render() {
		return (
			<React.Fragment>
				<section className="bg-home" style={{ color: "#d81935" }}>
					<div className="home-center">
						<Particles
							params={{
								particles: {
									number: {
										value: 50,
										density: {
											enable: true
										}
									},
									color: {
										value: "#d81935"
									},
									shape: {
										type: "polygon",
										stroke: {
											width: 2,
											color: "#d81935"
										},
										polygon: {
											nb_sides: 7
										},
										image: {
											src: "img/github.svg",
											width: 100,
											height: 100
										}
									},
									opacity: {
										value: 1,
										random: true,
										anim: {
											enable: true,
											speed: 0.25,
											opacity_min: 0,
											sync: false
										}
									},
									size: {
										value: 1
									},
									line_linked: {
										enable: false,
										color: "#202943",
										opacity: 1
									},
									move: {
										enable: true,
										speed: 5,
										direction: "top-left",
										random: false,
										straight: true,
										out_mode: "out"
									}
								},
								interactivity: {
									events: {
										onhover: {
											enable: true,
											mode: "repulse"
										},
										onclick: {
											enable: true,
											mode: "push"
										}
									}
								}
							}}
							style={{
								width: "100%",
								height: "auto",
								backgroundColor: "#ffffff",
								position: "absolute",
								top: "0",
								left: "0"
							}}
						/>
						<div className="home-desc-center">
							<div className="container">
								<Row className="justify-content-center">
									<Col
										md={9}
										className="text-center mt-0 mt-md-5 pt-0 pt-md-5"
									>
										<div className="title-heading margin-top-50">
											<h1 className="display-1 font-weight-bold mb-3 text-secondary animated fadeInDownBig animation-delay-3">
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
														aria-label="Delive video banner"
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
			</React.Fragment>
		);
	}
}

export default Banner;
