// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";
import axios from "axios";

import phone from "../../images/icon/phone.svg";
import mail from "../../images/icon/email.svg";
import location from "../../images/icon/location.svg";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			Contactvisible: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ Contactvisible: true });
		const { name, email, subject, message } = this.state;
		axios({
			method: "post",
			url: `https://api:key-someapikey@api.mailgun.net/v3/${process.env.REACT_APP_MAILGUN_DOMAIN}/messages`,
			auth: {
				username: "api",
				password: process.env.REACT_APP_MAILGUN_API
			},
			params: {
				from: `${name} <${email}>`,
				to: "jio.buenviaje@gmail.com",
				subject: subject,
				text: message
			}
		});
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, subject, message } = this.state;
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
									<div className="custom-form mt-4">
										<div id="message"></div>
										<Alert
											color="info"
											isOpen={this.state.Contactvisible}
											toggle={() => {
												this.setState({
													Contactvisible: !this.state
														.Contactvisible
												});
											}}
										>
											Contact details send successfully.
										</Alert>
										<form
											name="contact"
											method="post"
											onSubmit={this.handleSubmit}
										>
											<input
												type="hidden"
												name="form-name"
												value="contact"
											/>
											<Row>
												<Col md={12}>
													<div className="form-group position-relative">
														<label>
															Name{" "}
															<span className="text-danger">
																*
															</span>
														</label>
														<i className="mdi mdi-account ml-3 icons"></i>
														<input
															name="name"
															value={name}
															onChange={
																this
																	.handleChange
															}
															type="text"
															className="form-control pl-5"
															required
														/>
													</div>
												</Col>
												<Col md={12}>
													<div className="form-group position-relative">
														<label>
															Email{" "}
															<span className="text-danger">
																*
															</span>
														</label>
														<i className="mdi mdi-at ml-3 icons"></i>
														<input
															name="email"
															value={email}
															onChange={
																this
																	.handleChange
															}
															type="email"
															className="form-control pl-5"
															required
														/>
													</div>
												</Col>
												<Col md={12}>
													<div className="form-group position-relative">
														<label>
															Subject{" "}
															<span className="text-danger">
																*
															</span>
														</label>
														<i className="mdi mdi-email ml-3 icons"></i>
														<input
															name="subject"
															value={subject}
															onChange={
																this
																	.handleChange
															}
															type="text"
															className="form-control pl-5"
															required
														/>
													</div>
												</Col>
												<Col md={12}>
													<div className="form-group position-relative">
														<label>Message</label>
														<i className="mdi mdi-comment-text-outline ml-3 icons"></i>
														<textarea
															name="message"
															value={message}
															onChange={
																this
																	.handleChange
															}
															rows="4"
															className="form-control pl-5"
														></textarea>
													</div>
												</Col>
											</Row>
											<Row>
												<Col
													sm={12}
													className="text-center"
												>
													<button
														type="submit"
														className="submitBtn btn btn-primary btn-block"
													>
														Send Message
													</button>
													<div id="simple-msg"></div>
												</Col>
											</Row>
										</form>
									</div>
								</div>
							</Col>
						</Row>
						<div className="mt-100">
							<Row>
								<Col md={4}>
									<div className="contact-detail text-center">
										<div className="icon">
											<img src={phone} alt="" />
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
											<img src={mail} alt="" />
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
											<img src={location} alt="" />
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
