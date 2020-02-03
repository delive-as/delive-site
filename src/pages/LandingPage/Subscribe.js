// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Subscribe extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="section bg-light">
					<div className="container">
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
								<form>
									<div className="form-group">
										<div className="input-group mb-3">
											<input
												name="email"
												id="email"
												type="email"
												className="form-control"
												placeholder="Your email"
												required=""
											/>
											<div className="input-group-append">
												<button
													className="btn btn-primary submitBnt"
													type="button"
													id="newssubscribebtn"
												>
													Subscribe
												</button>
											</div>
										</div>
									</div>
								</form>
							</Col>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Subscribe;
