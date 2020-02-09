import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import rianMcDonnell from "../../images/team/rianMcDonnell.jpg";
import mattAdams from "../../images/team/mattAdams.jpg";
import jioBuenviaje from "../../images/team/jioBuenviaje.jpg";
import zachSy from "../../images/team/zachSy.jpg";
import mattGardner from "../../images/team/mattGardner.jpg";
import michaelWicks from "../../images/team/michaelWicks.jpg";
import nathanHanson from "../../images/team/nathanHanson.jpg";
import zachKousens from "../../images/team/zachKousens.jpg";

class Team extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="section">
					<div className="container">
						<Row>
							<div className="col-12 text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="main-title mb-4">
										The Team
									</h4>
									<div className="bar" />
								</div>
							</div>
						</Row>

						<Row>
							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={rianMcDonnell}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item shadow">
												<a
													href="https://www.rianmcdonnell.com/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-web"
														title="Website"
													></i>
												</a>
												<a
													href="https://www.linkedin.com/in/rianmcdonnell/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
												<a
													href="https://github.com/rianmcdonnell"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-github-circle"
														title="Github"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/rianmcdonnell/"
												className="name text-dark"
											>
												Rian Mc Donnell
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											CEO
										</small>
									</div>
								</div>
							</Col>

							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={mattAdams}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													href="https://www.linkedin.com/in/matt-a-adams-nd/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/matt-a-adams-nd/"
												className="name text-dark"
											>
												Matthew Adams
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											COO
										</small>
									</div>
								</div>
							</Col>

							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={jioBuenviaje}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													href="https://jbuenviaje.com/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-web"
														title="Website"
													></i>
												</a>
												<a
													href="https://www.linkedin.com/in/lockjio/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
												<a
													href="https://github.com/lockjio"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-github-circle"
														title="Github"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/lockjio/"
												className="name text-dark"
											>
												Jio Buenviaje
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											CTO
										</small>
									</div>
								</div>
							</Col>

							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={zachSy}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													href="https://zacharysy.net/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-web"
														title="Website"
													></i>
												</a>
												<a
													href="https://www.linkedin.com/in/zacharysy/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
												<a
													href="https://github.com/zacharysy"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-github-circle"
														title="Github"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/zacharysy/"
												className="name text-dark"
											>
												Zachary Sy
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											Software Engineer
										</small>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={mattGardner}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													href="https://www.linkedin.com/in/matthewthomasgardner"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/matthewthomasgardner"
												className="name text-dark"
											>
												Matthew Gardner
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											Business Advisor
										</small>
									</div>
								</div>
							</Col>

							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={michaelWicks}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													href="https://www.linkedin.com/in/michael-wicks-5b348915"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
												<a
													href="https://github.com/michaelwicks"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-github-circle"
														title="Github"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/michael-wicks-5b348915"
												className="name text-dark"
											>
												Michael Wicks
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											Technical Advisor
										</small>
									</div>
								</div>
							</Col>

							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={nathanHanson}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													href="https://www.linkedin.com/in/nathaniel-j-hanson"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
												<a
													href="https://github.com/nhanson2"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-github-circle"
														title="Github"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/nathaniel-j-hanson"
												className="name text-dark"
											>
												Nathaniel Hanson
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											Technical Advisor
										</small>
									</div>
								</div>
							</Col>

							<Col lg={3} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={zachKousens}
											className="img-fluid d-block rounded-pill mx-auto shadow border"
											alt=""
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													href="https://www.linkedin.com/in/zachary-kousens/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin-box"
														title="LinkedIn"
													></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<a
												href="https://www.linkedin.com/in/zachary-kousens/"
												className="name text-dark"
											>
												Zachary Kousens
											</a>
										</h5>
										<small
											className="designation text-muted"
											style={{ opacity: "75%" }}
										>
											Technical Advisor
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

export default Team;
