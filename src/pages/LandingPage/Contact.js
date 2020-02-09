import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import ContactForm from "../../components/Forms/ContactForm.js";

import phoneIcon from "../../images/icon/phone.svg";
import mailIcon from "../../images/icon/email.svg";
import locationIcon from "../../images/icon/location.svg";

class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="section">
					<div className="container">
						<Row>
							<div className="col-12 text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="main-title mb-4">
										Contact Us
									</h4>
									<div className="bar" />
								</div>
							</div>
						</Row>

						<Row>
							<Col lg={7} md={6} className="p-0 pl-md-3 pr-md-3">
								<div className="map map-height-two rounded map-gray">
									<iframe
										title="DeLive location"
										src="https://snazzymaps.com/embed/216141"
										style={{ border: 0 }}
										className="rounded"
										allowFullScreen
									></iframe>
								</div>
							</Col>

							<Col
								lg={5}
								md={6}
								className="mt-4 mt-sm-0 pt-2 pt-sm-0"
							>
								<div className="p-4 bg-white rounded shadow link">
									<h4>
										Fill up the form or email us at{" "}
										<a
											href="mailto:contact@delivedrones.com"
											className="text-primary"
										>
											contact@delivedrones.com
										</a>
									</h4>
									<ContactForm env={this.props.env} />
								</div>
							</Col>
						</Row>
						<div className="mt-100">
							<Row>
								<Col md={4}>
									<div className="contact-detail text-center">
										<div className="icon">
											<img src={phoneIcon} alt="" />
										</div>
										<div className="content mt-3 link">
											<h4 className="title font-weight-bold">
												Phone
											</h4>
											<a
												href="tel:+1845-729-9718"
												className="text-primary"
											>
												+1 574-631-8825
											</a>
										</div>
									</div>
								</Col>

								<Col
									md={4}
									className="mt-4 mt-sm-0 pt-2 pt-sm-0"
								>
									<div className="contact-detail text-center">
										<div className="icon">
											<img src={mailIcon} alt="" />
										</div>
										<div className="content mt-3 link">
											<h4 className="title font-weight-bold">
												Email
											</h4>
											<a
												href="mailto:contact@example.com"
												className="text-primary"
											>
												contact@delivedrones.com
											</a>
										</div>
									</div>
								</Col>

								<Col
									md={4}
									className="mt-4 mt-sm-0 pt-2 pt-sm-0"
								>
									<div className="contact-detail text-center">
										<div className="icon">
											<img src={locationIcon} alt="" />
										</div>
										<div className="content mt-3 link">
											<h4 className="title font-weight-bold">
												Location
											</h4>
											<a
												href="https://goo.gl/maps/Zqs15HV7TG6EewGj7"
												className="text-primary"
											>
												1400 E Angela Blvd, <br /> South
												Bend, IN 46617, USA
											</a>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Contact;
