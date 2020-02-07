import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import client1 from "../../images/partner/albersGroup.png";
import client2 from "../../images/partner/ideaCenter.png";
import client3 from "../../images/partner/ndEsteem.png";

class Partner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section className="pt-5 pb-5 border-bottom border-top bg-light">
				<div className="container">
					<Row className="justify-content-center">
						<React.Fragment>
							<Col
								lg={4}
								md={4}
								className="col-6 text-center greyed"
							>
								<div className="greyed">
									<a href="http://thealbersgroup.com/">
										<img src={client1} height="70" alt="" />
									</a>
								</div>
							</Col>

							<Col lg={4} md={4} className="col-6 text-center">
								<div className="greyed">
									<a href="https://ideacenter.nd.edu/">
										<img src={client2} height="70" alt="" />
									</a>
								</div>
							</Col>

							<Col
								lg={4}
								md={4}
								className="col-6 text-center mt-4 mt-sm-0"
							>
								<div className="greyed">
									<a href="https://esteem.nd.edu/">
										<img src={client3} height="70" alt="" />
									</a>
								</div>
							</Col>
						</React.Fragment>
					</Row>
				</div>
			</section>
		);
	}
}

export default Partner;
