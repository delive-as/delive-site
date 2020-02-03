// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//import images
import survivalRates from "../../images/survivalRates.png";

class Purpose extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="section">
					<div className="container">
						<Row>
							<div className="col-12 text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="main-title mb-4">
										The Purpose
									</h4>
									<div className="bar" />
								</div>
							</div>
						</Row>
						<div className="rounded">
							<Row className="align-items-center justify-content-center">
								<Col lg={6}>
									<img
										src={survivalRates}
										className="rounded img-fluid border shadow ml-lg-4"
										alt=""
									/>
								</Col>

								<Col lg={6} className="text-center">
									<div className="section-title p-5">
										<h4 className="title mb-2 mt-4">
											<span className="text-primary">
												Reviving
											</span>{" "}
											EMS
										</h4>
										<p className="text-muted mx-auto para-desc mb-0">
											At De
											<span className="text-primary">
												Live
											</span>
											, we aim to save more lives by
											arriving earlier than the first
											responder, becoming the{" "}
											<span className="text-primary">
												first
											</span>{" "}
											first responder.
										</p>
										<h5 className="mt-5">
											National Out-Of-Hospital Cardiac
											Arrest Survival Rates
										</h5>
										<Row>
											<Col lg={6} className="pt-2">
												<div className="counter-box position-relative counter-border bg-light shadow rounded py-4 text-center">
													<h5 className="counter-head">
														<span className="text-primary">
															Current
														</span>{" "}
														EMS
													</h5>
													<h1 className="mb-0">
														<span className="counter-value text-primary">
															10
														</span>
														%
													</h1>
												</div>
											</Col>

											<Col lg={6} className="pt-2">
												<div className="counter-box position-relative counter-border bg-light shadow rounded py-4 text-center">
													<h5 className="counter-head">
														With De
														<span className="text-primary">
															Live
														</span>
													</h5>
													<h1 className="mb-0">
														<span className="counter-value text-primary">
															23
														</span>
														%
													</h1>
												</div>
											</Col>
										</Row>
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

export default Purpose;
