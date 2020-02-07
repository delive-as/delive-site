import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { env } from "./config";

const app = (
	<BrowserRouter>
		<App env={env} />
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
