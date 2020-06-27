import React, { Component } from "react";
import {
	Route,
	Switch,
	BrowserRouter as Router,
	withRouter,
} from "react-router-dom";

import { Helmet } from "react-helmet";

import Layout from "./components/Layout/";

import "./Apps.scss";
import "./css/materialdesignicons.min.css";

import routes from "./routes";

import ReactGA from "react-ga";
ReactGA.initialize("UA-150731209-6");
ReactGA.pageview("/");

function withLayout(WrappedComponent) {
	return class extends React.Component {
		render() {
			return (
				<Layout>
					<WrappedComponent></WrappedComponent>
				</Layout>
			);
		}
	};
}

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<meta charset="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<title>DeLive Drones</title>
					<meta name="author" content="Jio Buenviaje" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="DeLive Drones" />

					<meta property="og:title" content="DeLive Drones" />
					<meta
						property="og:image"
						content="https://user-images.githubusercontent.com/50670255/76828895-53944e00-67f8-11ea-903a-eb38e4736ba5.png"
					/>
					<meta
						property="og:description"
						content="At DeLive, we aim to revolutionize emergency medical services (EMS) and save more lives by arriving earlier than the first responder with drone fly-ahead technology."
					/>
					<meta property="og:url" content="delivedrones.com" />

					<meta property="twitter:url" content="delivedrones.com" />
					<meta name="theme-color" content="#ffffff" />
					<link rel="shortcut icon" href="./favicon.ico" />
					<meta property="twitter:title" content="DeLive Drones" />
					<meta
						name="description"
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
					<meta
						property="twitter:image"
						content="https://user-images.githubusercontent.com/50670255/76828895-53944e00-67f8-11ea-903a-eb38e4736ba5.png"
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<link rel="canonical" href="https://delivedrones.com/" />
				</Helmet>
				<Router>
					<React.Suspense fallback={<div></div>}>
						<Switch>
							{routes.map((route, idx) => (
								<Route
									path={route.path}
									component={withLayout(route.component)}
									key={idx}
								/>
							))}
						</Switch>
					</React.Suspense>
				</Router>
			</React.Fragment>
		);
	}
}

export default withRouter(App);
