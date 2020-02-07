import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			formSubmitted: false,
			contactVisible: false
		};
	}

	handleChange(event) {
		this.setState({
			name: event.target.value,
			email: event.target.value,
			subject: event.target.value,
			message: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const {
			REACT_APP_EMAILJS_TEMPLATEID: template,
			REACT_APP_EMAILJS_USERID: user
		} = this.props.env;

		this.sendFeedback(
			template,
			this.state.name,
			this.props.email,
			this.state.subject,
			this.state.message,
			user
		);

		this.setState({
			formSubmitted: true,
			contactVisible: true
		});
	}

	sendFeedback(template, name, email, subject, message, user) {
		window.emailjs
			.send(
				"default_service", // default email provider in your EmailJS account
				template,
				{
					name,
					email,
					subject,
					message
				},
				user
			)
			.then(res => {
				this.setState({ formEmailSent: true });
			})
			.catch(err =>
				console.error("Failed to send feedback. Error: ", err)
			);
	}

	render() {
		return (
			<div className="custom-form mt-4">
				<div id="message"></div>
				<Alert
					color="info"
					isOpen={this.state.contactVisible}
					toggle={() => {
						this.setState({
							contactVisible: !this.state.contactVisible
						});
					}}
				>
					Contact details send successfully.
				</Alert>
				<form name="contact" method="post" onSubmit={this.handleSubmit}>
					<input type="hidden" name="form-name" value="contact" />
					<Row>
						<Col md={12}>
							<div className="form-group position-relative">
								<label>
									Name <span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-account ml-3 icons"></i>
								<input
									name="name"
									value={this.state.name}
									onChange={this.handleChange}
									type="text"
									className="form-control pl-5"
									required
								/>
							</div>
						</Col>
						<Col md={12}>
							<div className="form-group position-relative">
								<label>
									Email <span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-at ml-3 icons"></i>
								<input
									name="email"
									value={this.state.email}
									onChange={this.handleChange}
									type="email"
									className="form-control pl-5"
									required
								/>
							</div>
						</Col>
						<Col md={12}>
							<div className="form-group position-relative">
								<label>
									Subject{" "}
									<span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-email ml-3 icons"></i>
								<input
									name="subject"
									value={this.state.subject}
									onChange={this.handleChange}
									type="text"
									className="form-control pl-5"
									required
								/>
							</div>
						</Col>
						<Col md={12}>
							<div className="form-group position-relative">
								<label>
									Message{" "}
									<span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-comment-text-outline ml-3 icons"></i>
								<textarea
									name="message"
									value={this.state.message}
									onChange={this.handleChange}
									rows="4"
									className="form-control pl-5"
								></textarea>
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={12} className="text-center">
							<button
								type="submit"
								value="Submit"
								className="submitBtn btn btn-primary btn-block"
							>
								Send Message
							</button>
							<div id="simple-msg"></div>
						</Col>
					</Row>
				</form>
			</div>
		);
	}
}

export default ContactForm;
