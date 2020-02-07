import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import droneFlight from "../../images/drone/droneFlight.png";

class Solution extends Component {
	constructor(props) {
		super(props);
		this.state = {
			autoplay: true,
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}
	openModal() {
		this.setState({ isOpen: true });
	}
	slideNext = () => {
		this.slider.slideNext();
	};
	slidePrev = () => {
		this.slider.slidePrev();
	};
	goToSlide = () => {
		this.slider.goToSlide(4);
	};
	autoplay = () => {
		this.setState({ autoplay: !this.state.autoplay });
	};
	_changeIcon = () => {
		let { leftIcon, rightIcon } = this.state;
		leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
		rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
		this.setState({ leftIcon, rightIcon });
	};

	render() {
		return (
			<React.Fragment>
				<section className="section bg-light">
					<div className="container">
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="main-title mb-4">
										The Solution
									</h4>
									<div className="bar" />
								</div>
							</Col>
						</Row>
						<ModalVideo
							channel="youtube"
							isOpen={this.state.isOpen}
							videoId="L61p2uyiMSo"
							onClose={() => this.setState({ isOpen: false })}
						/>
						<Row className="align-items-center">
							<Col lg={7} md={6}>
								<div className="position-relative">
									<img
										src={droneFlight}
										className="rounded img-fluid mx-auto d-block"
										alt=""
									/>
									<div className="play-icon">
										<Link
											onClick={this.openModal}
											to="#"
											className="play-btn shadow video-play-icon"
										>
											<i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
										</Link>
									</div>
								</div>
							</Col>

							<Col
								lg={5}
								md={6}
								className="mt-4 pt-2 mt-sm-0 pt-sm-0"
							>
								<div className="section-title ml-lg-4">
									<h4 className="title mb-4">
										De
										<span className="text-primary">
											Live
										</span>{" "}
										Drones-as-a-Service
									</h4>
									<p className="text-secondary">
										We are offering{" "}
										<span className="text-primary">
											both
										</span>{" "}
										the{" "}
										<span className="text-primary">
											physical drones
										</span>{" "}
										able to transport medical supplies and
										the{" "}
										<span className="text-primary">
											web application
										</span>{" "}
										as a subscription.
									</p>
									<ul className="list-unstyled feature-list text-secondary">
										<li>
											<i className="mdi mdi-checkbox-marked-circle text-info h4 mr-2"></i>
											Tailor-made hardware + software for
											your specific needs
										</li>
										<li>
											<i className="mdi mdi-checkbox-marked-circle text-info h4 mr-2"></i>
											24/7 operation and personal support
										</li>
										<li>
											<i className="mdi mdi-checkbox-marked-circle text-info h4 mr-2"></i>
											Constant maintenance and updates
										</li>
										<li>
											<i className="mdi mdi-checkbox-marked-circle text-info h4 mr-2"></i>
											Easy transition and integration with
											your current solutions
										</li>
									</ul>
									<Link
										to="#contact"
										className="btn btn-primary mt-1"
									>
										Get Started
									</Link>
								</div>
							</Col>
						</Row>
					</div>

					<div className="container mt-60">
						<Row>
							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-file-tree text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Automatic Tasking System
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-timer text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Quick Bootup and Takeoff
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-hand text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Robust Release Mechanism
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-face-recognition text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Recognition and Avoidance
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-monitor-dashboard text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Real-Time Video Feed
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-face-agent text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Easy Switch to Assisted
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-battery-10 text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Smart Battery Backup
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-memory text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Wide LTE Connectivity
										</h4>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="key-feature d-flex p-3 bg-white rounded shadow">
									<div className="icon text-center rounded-pill mr-3">
										<i className="mdi mdi-fan text-primary"></i>
									</div>
									<div className="content mt-2">
										<h4 className="title mb-0">
											Industry-Standard Structure
										</h4>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Solution;
