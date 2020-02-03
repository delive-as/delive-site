import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router";

import logo from "../../images/logo.png";

class Topbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			page: false,
			landing: false,
			docs: false,
			new: false,
			utility: false,
			user: false,
			work: false,
			blog: false,
			carr: false
		};
		this.toggleLine = this.toggleLine.bind(this);
	}

	toggleLine() {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));
	}

	componentDidMount() {
		var matchingMenuItem = null;
		var ul = document.getElementById("top-menu");
		var items = ul.getElementsByTagName("a");
		for (var i = 0; i < items.length; ++i) {
			if (this.props.location.pathname === items[i].pathname) {
				matchingMenuItem = items[i];
				break;
			}
		}
		if (matchingMenuItem) {
			this.activateParentDropdown(matchingMenuItem);
		}
	}

	activateParentDropdown = item => {
		const parent = item.parentElement;
		if (parent) {
			parent.classList.add("active"); // li
			const parent1 = parent.parentElement;
			parent1.classList.add("active"); // li
			if (parent1) {
				const parent2 = parent1.parentElement;
				parent2.classList.add("active"); // li
				if (parent2) {
					const parent3 = parent2.parentElement;
					parent3.classList.add("active"); // li
					if (parent3) {
						const parent4 = parent3.parentElement;
						parent4.classList.add("active"); // li
					}
				}
			}
		}
	};

	render() {
		return (
			<React.Fragment>
				<header id="topnav" className="defaultscroll sticky">
					<div className="container">
						<div>
							<Link className="logo" to="/">
								<img src={logo} alt="" /> De
								<span className="text-primary">Live</span>.
							</Link>
						</div>
						<div className="buy-button">
							<Link to="#subscribe" className="btn btn-primary">
								Subscribe
							</Link>
						</div>
						<div className="menu-extras">
							<div className="menu-item">
								<Link
									to="#"
									onClick={this.toggleLine}
									className={
										this.state.isOpen
											? "navbar-toggle open"
											: "navbar-toggle"
									}
								>
									<div className="lines">
										<span></span>
										<span></span>
										<span></span>
									</div>
								</Link>
							</div>
						</div>

						<div
							id="navigation"
							style={{
								display: this.state.isOpen ? "block" : "none"
							}}
						>
							<ul className="navigation-menu" id="top-menu">
								<li>
									<Link to="/#home">Home</Link>
								</li>
								<li>
									<Link to="/#purpose">Purpose</Link>
								</li>
								<li>
									<Link to="/#solution">Solution</Link>
								</li>
								{/* <li>
									<Link to="/#trial">Trial</Link>
								</li>
								*/}
								<li>
									<Link to="/#team">Team</Link>
								</li>
								<li>
									<Link to="/#latest">Latest</Link>
								</li>
								<li>
									<Link to="/#contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}

export default withRouter(Topbar);
