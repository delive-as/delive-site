// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SubscribeForm from "./SubscribeForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Particles from "react-particles-js";

const url =
	"https://DeLiveDrones.us4.list-manage.com/subscribe/post?u=348297cf2d50a2fd0e83fd12b&amp;id=ab27abf3a8";

class Subscribe extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="section bg-light">
					<div className="container">
						<Particles
							params={{
								particles: {
									number: {
										value: 50,
										density: {
											enable: false
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
											mode: "grab"
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
								backgroundColor: "#f8f9fc",
								position: "absolute",
								top: "0",
								left: "0"
							}}
						/>
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="main-title mb-4">
										Subscribe For Updates
									</h4>
									<div className="bar" />
									<p
										className="text-muted para-desc mx-auto mb-0"
										style={{ opacity: "75%" }}
									>
										We at{" "}
										<span className="text-secondary font-weight-bold">
											De
										</span>
										<span className="text-primary font-weight-bold">
											Live
										</span>{" "}
										value your privacy. Rest assured we will
										not spam you.
									</p>
								</div>
							</Col>
						</Row>

						<Row className="justify-content-center mt-4 pt-2">
							<Col lg={7} md={10}>
								<MailchimpSubscribe
									url={url}
									render={({
										subscribe,
										status,
										message
									}) => (
										<SubscribeForm
											status={status}
											message={message}
											onValidated={formData =>
												subscribe(formData)
											}
										/>
									)}
								/>
							</Col>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Subscribe;
