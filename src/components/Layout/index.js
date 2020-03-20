import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.getElementById("pageLoader").style.display = "block";
		setTimeout(function() {
			document.getElementById("pageLoader").style.display = "none";
		}, 1000);
	}

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<meta charSet="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta name="author" content="DeLive Drones" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="DeLive Drones" />
					<meta property="og:url" content="delivedrones.com" />
					<meta property="twitter:url" content="delivedrones.com" />
					<meta name="theme-color" content="#ffffff" />
					<title>DeLive Drones</title>
					<meta property="og:title" content="DeLive Drones" />
					<meta property="twitter:title" content="DeLive Drones" />
					<meta
						name="description"
						content="At DeLive, we aim to revolutionize emergency medical services (EMS) and save more lives by arriving earlier than the first responder with drone fly-ahead technology."
					/>
					<meta
						property="og:description"
						content="At DeLive, we aim to revolutionize emergency medical services (EMS) and save more lives by arriving earlier than the first responder with drone fly-ahead technology."
					/>
					<meta
						property="twitter:description"
						content="At DeLive, we aim to revolutionize emergency medical services (EMS) and save more lives by arriving earlier than the first responder with drone fly-ahead technology."
					/>
					<meta
						name="keywords"
						content="delive,drones,delivedrones,deliveaerial,deliveaerialsystems,aerialsystems,unmanneddrones,unmannedaerialdrones,uad,emergency,medical,services,emergencymedicalservices,medicalservices,ems,firstresponder,nd,notredame,esteem,esteemnd,southbend,indiana,university,flyahead,drone,dronesasaservice,daas,ideacenter,innovationpark,ces,consumerelectronicsshow,consumerelectronics,consumerelectronicsshow2020,ces2020,notre,dame,und,racetorevenue,universityofnotredame,ndideacenter,ndinnovationpark"
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<link rel="canonical" href="https://delivedrones.com/" />
				</Helmet>
				<Navbar />
				{this.props.children}
				<Footer />
				<div id="bottomIcon">
					<ScrollUpButton ContainerClassName="back-to-top rounded text-center" />
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(Layout);
