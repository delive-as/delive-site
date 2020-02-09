import React, { Component } from "react";

import Banner from "./Banner";
import Partner from "./Partner";
import Purpose from "./Purpose";
import Solution from "./Solution";
import Action from "./Action";
import Team from "./Team";
import Latest from "./Latest";
import Contact from "./Contact";
import Subscribe from "./Subscribe";

class Index extends Component {
	componentDidMount() {
		window.addEventListener("scroll", this.scrollNavigation, true);
	}

	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollNavigation);
	}

	scrollNavigation = () => {
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
		if (top > 80) {
			document.getElementById("topnav").classList.add("nav-sticky");
		} else {
			document.getElementById("topnav").classList.remove("nav-sticky");
		}
	};

	render() {
		return (
			<React.Fragment>
				{/* Banner */}
				<section id="home">
					<Banner />
				</section>

				{/* Partner */}
				<section id="partner">
					<Partner />
				</section>

				{/* Purpose */}
				<section id="purpose">
					<Purpose />
				</section>

				{/* Solution */}
				<section id="solution">
					<Solution />
				</section>

				{/* Trial */}
				{/* <section id="trial">
					<Trial />
				</section> */}

				{/* Action */}
				<section id="action">
					<Action />
				</section>

				{/* Team */}
				<section id="team">
					<Team />
				</section>

				{/* Latest */}
				<section id="latest">
					<Latest />
				</section>

				{/* Contact */}
				<section id="contact">
					<Contact />
				</section>

				{/* Subscribe */}
				<section id="subscribe">
					<Subscribe />
				</section>
			</React.Fragment>
		);
	}
}

export default Index;
