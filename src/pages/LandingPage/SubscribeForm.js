import React, { useState } from "react";
import { Alert } from "reactstrap";

const SubscribeForm = ({ status, message, onValidated }) => {
	const [state, setState] = useState(false);
	let email;

	const submit = () =>
		setState(!state) &&
		email &&
		email.value.indexOf("@") > -1 &&
		onValidated({
			EMAIL: email.value
		});

	return (
		<form>
			<div className="form-group">
				<div className="input-group mb-3">
					<input
						ref={node => (email = node)}
						type="email"
						name="email"
						id="email"
						className="form-control"
						placeholder="Your email"
						required=""
					/>
					<div className="input-group-append">
						<button
							className="toggle btn btn-primary submitBnt"
							type="button"
							id="newssubscribebtn"
							onClick={submit}
						>
							Subscribe
						</button>
					</div>
				</div>
				{state ? (
					<div>
						<div id="message"></div>
						<Alert color="info">
							You are now subscribed, thank you!
						</Alert>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</form>
	);
};

export default SubscribeForm;
