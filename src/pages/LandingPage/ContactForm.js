import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";
import PropTypes from "prop-types";

const userID = process.env.REACT_APP_EMAILJS_USERID;
const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;

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
			this.props.email,
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
		window.emailjs
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
									onChange={this.handleName}
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
									onChange={this.handleEmail}
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
									onChange={this.handleSubject}
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

ContactForm.propTypes = {
	env: PropTypes.object.isRequired
};

export default ContactForm;
