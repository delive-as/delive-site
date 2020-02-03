import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Blog Images
import blog1 from "../../images/latest/ces1.jpg";
import blog2 from "../../images/latest/ces2.jpg";
import blog3 from "../../images/latest/ces3.jpg";

class Latest extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="section bg-light">
					<div className="container mt-60">
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="main-title mb-4">
										The Latest
									</h4>
									<div className="bar"></div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="blog position-relative overflow-hidden shadow rounded">
									<div className="position-relative">
										<img
											src={blog3}
											className="img-fluid rounded-top"
											alt=""
										/>
										<div className="overlay rounded-top bg-dark"></div>
									</div>
									<div className="content p-4">
										<h4>
											<a
												href="https://www.insideindianabusiness.com/story/41525400/notre-dame-to-showcase-prototypes-in-las-vegas"
												className="title text-dark"
											>
												Notre Dame to Showcase
												Prototypes in Las Vegas
											</a>
										</h4>
										<div className="post-meta mt-3">
											<a
												href="https://www.insideindianabusiness.com/story/41525400/notre-dame-to-showcase-prototypes-in-las-vegas"
												className="text-muted float-right readmore"
											>
												Read More{" "}
												<i className="mdi mdi-chevron-right"></i>
											</a>
											<ul className="list-unstyled mb-0">
												<li className="list-inline-item mr-2">
													<span className="text-muted like">
														<i className="mdi mdi-calendar-check mr-1"></i>
														January 06, 2020
													</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="author">
										<small className="text-light date">
											<i className="mdi mdi-office-building"></i>{" "}
											Inside Indiana Business
										</small>
										<small className="text-light user d-block">
											<i className="mdi mdi-account"></i>{" "}
											Merritt McLaughlin
										</small>
									</div>
								</div>
							</Col>
							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="blog position-relative overflow-hidden shadow rounded">
									<div className="position-relative">
										<img
											src={blog2}
											className="img-fluid rounded-top"
											alt=""
										/>
										<div className="overlay rounded-top bg-dark"></div>
									</div>
									<div className="content p-4">
										<h4>
											<a
												href="https://www.abc57.com/news/notre-dame-startups-heading-to-ces"
												className="title text-dark"
											>
												Notre Dame startups heading to
												CES
											</a>
										</h4>
										<div className="post-meta mt-3">
											<a
												href="https://www.abc57.com/news/notre-dame-startups-heading-to-ces"
												className="text-muted float-right readmore"
											>
												Read More{" "}
												<i className="mdi mdi-chevron-right"></i>
											</a>
											<ul className="list-unstyled mb-0">
												<li className="list-inline-item mr-2">
													<span className="text-muted like">
														<i className="mdi mdi-calendar-check mr-1"></i>
														January 06, 2020
													</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="author">
										<small className="text-light date">
											<i className="mdi mdi-office-building"></i>{" "}
											ABC57
										</small>
										<small className="text-light user d-block">
											<i className="mdi mdi-account"></i>{" "}
											Marisa Oberle
										</small>
									</div>
								</div>
							</Col>
							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="blog position-relative overflow-hidden shadow rounded">
									<div className="position-relative">
										<img
											src={blog1}
											className="img-fluid rounded-top"
											alt=""
										/>
										<div className="overlay rounded-top bg-dark"></div>
									</div>
									<div className="content p-4">
										<h4>
											<a
												href="https://news.nd.edu/news/notre-dame-students-staff-to-exhibit-new-tech-at-ces/"
												className="title text-dark"
											>
												Notre Dame students, staff to
												exhibit new tech at CES
											</a>
										</h4>
										<div className="post-meta mt-3">
											<a
												href="https://news.nd.edu/news/notre-dame-students-staff-to-exhibit-new-tech-at-ces/"
												className="text-muted float-right readmore"
											>
												Read More{" "}
												<i className="mdi mdi-chevron-right"></i>
											</a>
											<ul className="list-unstyled mb-0">
												<li className="list-inline-item mr-2">
													<span className="text-muted like">
														<i className="mdi mdi-calendar-check mr-1"></i>
														January 03, 2020
													</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="author">
										<small className="text-light date">
											<i className="mdi mdi-office-building"></i>{" "}
											Notre Dame News
										</small>
										<small className="text-light user d-block">
											<i className="mdi mdi-account"></i>{" "}
											Erin Blasko
										</small>
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

export default Latest;
