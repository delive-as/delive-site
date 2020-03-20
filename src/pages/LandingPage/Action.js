import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import bgPath from "../../images/bgPath.jpg";

class Action extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			collapse1: true
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	render() {
		return (
			<section
				className="bg-cta border-top border-bottom"
				style={{
					background: `url(${bgPath})`
				}}
			>
				<div className="container">
					<Row className="justify-content-center">
						<Col className="text-center">
							<div className="section-title text-primary">
								<h4 className="main-title mb-4">
									Interested
									<span className="text-secondary">?</span>
								</h4>
								<p className="text-secondary para-desc mx-auto mb-0">
									Thinking of working with us for your city,
									event, or location? We would love to chat
									about tailoring our solution to your
									specific needs
								</p>

								<div className="watch-video mt-4 pt-2">
									<Link
										to="#"
										onClick={this.openModal}
										className="video-play-icon watch text-dark mb-2 ml-2"
										aria-label="Delive video action"
									>
										<i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i>{" "}
									</Link>
									<Link
										to="#contact"
										className="btn btn-primary mb-2"
									>
										Get Started
									</Link>

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
						</Col>
					</Row>
				</div>
			</section>
		);
	}
}

export default Action;
