import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<hr />
				<footer className="footer footer-bar">
					<div className="container text-center">
						<div className="row align-items-center">
							<div className="col-sm-6">
								<div className="text-sm-left">
									<span>
										<Link
											className="logo-footer mb-1"
											to="/"
										>
											De
											<span className="text-primary">
												Live
											</span>
											.
										</Link>{" "}
										<ul
											style={{ display: "inline" }}
											className="list-unstyled social-icon social"
										>
											<li className="list-inline-item">
												<a
													href="https://www.linkedin.com/company/delivedrones/"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-linkedin"
														title="LinkedIn"
													></i>
												</a>
											</li>
											<li className="list-inline-item">
												<a
													href="https://github.com/delive-as"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-github-circle"
														title="Github"
													></i>
												</a>
											</li>
										</ul>
									</span>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="text-sm-right">
									<p className="mb-0">
										&copy; {new Date().getFullYear()} DeLive
										Aerial System, LLC. All rights reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;
