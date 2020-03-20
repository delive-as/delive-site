import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";
import emailjs from "emailjs-com";

const userID = "user_i7x8e38tUYu1k5muOLfeh";
const serviceID = "delive";
const templateID = "delive_contact";

class ContactForm extends Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: "",
		formSubmitted: false,
		contactVisible: false
	};

	handleName = this.handleName.bind(this);
	handleEmail = this.handleEmail.bind(this);
	handleSubject = this.handleSubject.bind(this);
	handleMessage = this.handleMessage.bind(this);
	handleSubmit = this.handleSubmit.bind(this);

	handleName(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleEmail(event) {
		this.setState({
			email: event.target.value
		});
	}

	handleSubject(event) {
		this.setState({
			subject: event.target.value
		});
	}

	handleMessage(event) {
		this.setState({
			message: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.sendFeedback(
			serviceID,
			templateID,
			this.state.name,
			this.state.email,
			this.state.subject,
			this.state.message,
			userID
		);

		this.setState({
			formSubmitted: true,
			contactVisible: true
		});
	}

	sendFeedback(serviceID, templateID, name, email, subject, message, userID) {
		emailjs
			.send(
				serviceID,
				templateID,
				{
					name,
					email,
					subject,
					message
				},
				userID
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
					Message received, thank you!
				</Alert>
				<form
					className="contact-form"
					name="contact-form"
					method="post"
					onSubmit={this.handleSubmit}
				>
					<Row>
						<Col md={12}>
							<div className="form-group position-relative">
								<label htmlFor="name">
									Name <span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-account ml-3 icons"></i>
								<input
									id="name"
									name="name"
									value={this.state.name}
									onChange={this.handleName}
									type="text"
									className="form-control pl-5"
									required
								/>
							</div>
						</Col>
						<Col md={12}>
							<div className="form-group position-relative">
								<label htmlFor="email">
									Email <span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-at ml-3 icons"></i>
								<input
									id="email"
									name="email"
									value={this.state.email}
									onChange={this.handleEmail}
									type="email"
									className="form-control pl-5"
									required
								/>
							</div>
						</Col>
						<Col md={12}>
							<div className="form-group position-relative">
								<label htmlFor="subject">
									Subject{" "}
									<span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-email ml-3 icons"></i>
								<input
									id="subject"
									name="subject"
									value={this.state.subject}
									onChange={this.handleSubject}
									type="text"
									className="form-control pl-5"
									required
								/>
							</div>
						</Col>
						<Col md={12}>
							<div className="form-group position-relative">
								<label htmlFor="message">
									Message{" "}
									<span className="text-danger">*</span>
								</label>
								<i className="mdi mdi-comment-text-outline ml-3 icons"></i>
								<textarea
									id="message"
									name="message"
									value={this.state.message}
									onChange={this.handleMessage}
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
								value="Send"
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
