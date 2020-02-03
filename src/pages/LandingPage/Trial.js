// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import proposedMap from "../../images/status/proposedMap.png";
import key1 from "../../images/status/key1.png";
import key2 from "../../images/status/key2.png";
import key3 from "../../images/status/key3.png";
import key4 from "../../images/status/key4.png";

import population from "../../images/icon/population.svg";
import cardiac from "../../images/icon/cardiac.svg";
import lives from "../../images/icon/lives.svg";

class Status extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="section">
					<div className="container">
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="section-title mb-60">
									<h4 className="main-title mb-4">
										The Trial
									</h4>
									<div className="bar" />
									<p className="text-muted para-desc mb-0 mx-auto">
										De
										<span className="text-primary">
											Live
										</span>{" "}
										currently has an upcoming trial with the
										city of{" "}
										<span className="text-primary">
											Fort Wayne, Indiana
										</span>{" "}
										slated for{" "}
										<span className="text-primary">
											Summer 2020
										</span>
										.
									</p>
								</div>
							</Col>
						</Row>
					</div>

					<div className="container">
						<Row>
							<Col lg={6}>
								<div className="row justify-content-center">
									<h4 className="title mt-lg-4 mt-0 mb-2 text-center">
										Our proposed{" "}
										<span className="text-primary">
											personalized
										</span>{" "}
										solution
									</h4>
								</div>
								<Row>
									<Col lg={6} className="mt-4 pt-2">
										<div className="counter-box position-relative counter-border bg-light shadow rounded py-4 text-center">
											<div className="contact-detail">
												<div className="content">
													<div className="icon">
														<img
															src={population}
															alt=""
														/>
													</div>
												</div>
											</div>
											<h2 className="mb-0">
												<span className="counter-value">
													260,954
												</span>
											</h2>
											<h5 className="counter-head">
												Population
											</h5>
										</div>
									</Col>

									<Col lg={6} className="mt-4 pt-2">
										<div className="counter-box position-relative counter-border bg-light shadow rounded py-4 text-center">
											<div className="contact-detail">
												<div className="content">
													<div className="icon">
														<img
															src={cardiac}
															alt=""
														/>
													</div>
												</div>
											</div>
											<h2 className="mb-0">
												<span className="counter-value">
													250
												</span>
											</h2>
											<h5 className="counter-head">
												Annual Cardiac Arrests
											</h5>
										</div>
									</Col>
								</Row>

								<Row className="justify-content-center">
									<Col lg={6} className="mt-4 pt-2">
										<div className="counter-box position-relative counter-border bg-primary shadow rounded py-4 text-center">
											<div className="contact-detail">
												<div className="content">
													<div className="icon">
														<img
															src={lives}
															alt=""
														/>
													</div>
												</div>
											</div>
											<h2 className="text-light mb-0">
												<span className="counter-value">
													33
												</span>
											</h2>
											<h5 className="counter-head text-light">
												Potential Lives Saved
											</h5>
										</div>
									</Col>
								</Row>
							</Col>

							<Col lg={6} className="align-text-center">
								<div className="section-title">
									<Row className="justify-content-center">
										<Col className="text-center">
											<img
												src={proposedMap}
												className="img-fluid rounded border shadow mb-3 mt-4"
												alt=""
											/>
										</Col>
									</Row>
									<p className="text-secondary para-desc mb-1 ml-2 ml-md-5">
										<img
											src={key1}
											className="img-fluid rounded shadow ml-4 ml-lg-5"
											alt=""
										/>{" "}
										<span className="ml-2">
											Fort Wayne Fire Department
										</span>
									</p>
									<p className="text-secondary para-desc mb-1 ml-2 ml-md-5">
										<img
											src={key2}
											className="img-fluid rounded shadow ml-4 ml-lg-5"
											alt=""
										/>{" "}
										<span className="ml-2">
											Southwest Fire Department
										</span>
									</p>
									<p className="text-secondary para-desc mb-1 ml-2 ml-md-5">
										<img
											src={key3}
											className="img-fluid rounded shadow ml-4 ml-lg-5"
											alt=""
										/>{" "}
										<span className="ml-2">
											Three Rivers EMS
										</span>
									</p>
									<p className="text-secondary para-desc mb-1 ml-2 ml-md-5">
										<img
											src={key4}
											className="img-fluid rounded shadow ml-4 ml-lg-5"
											alt=""
										/>{" "}
										<span className="ml-2">
											Proposed Drone Base
										</span>
									</p>
								</div>
							</Col>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Status;
