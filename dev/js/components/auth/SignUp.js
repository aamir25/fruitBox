import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import { register } from '../../actions/authActions';

class SignUP extends Component {
	constructor(props) {
		super(props);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleRegister(event) {
		event.preventDefault();
		let data = {
			"name": document.getElementById("name").value,
			"email": document.getElementById("email").value,
			"password": document.getElementById("password").value,
			"phone_no": document.getElementById("mobileNo").value
		}
		this.props.register(data);
	}

	render() {
		console.log(this.props.auth);
		return (
			<div>
				{
					this.props.auth.showSuccessModal &&
					<ModalContainer onClose={this.handleClose}>
			          	<ModalDialog onClose={this.handleClose}>
			          		<div className="check_mark">
							  	<div className="sa-icon sa-success animate">
							    	<span className="sa-line sa-tip animateSuccessTip"></span>
							    	<span className="sa-line sa-long animateSuccessLong"></span>
							    	<div className="sa-placeholder"></div>
							    	<div className="sa-fix"></div>
							  	</div>
							</div>
			            	<h1 className="text-success">Sign-Up Successful!</h1>
			          	</ModalDialog>
			        </ModalContainer>
			    }
			    <h1 className="text-center">Register </h1>
			    <div className="login-card">
			        <p className="profile-name-card"> </p>
			        <form className="form-signin" onSubmit={this.handleRegister}><span className="reauth-email"> </span>
			            <input className="form-control" type="email" required placeholder="Email address" autoFocus="" id="email" />
			            <p id="emailError"></p>
			            <input className="form-control" type="password" required placeholder="Password" id="password" />
			            <p id="passwordError"></p>
			            <input className="form-control" type="password" required placeholder="Confirm Password" id="cPassword" />
			            <p id="cPasswordError"></p>
			            <input className="form-control" type="text" required placeholder="Name" id="name" />
			            <p id="nameError"></p>
			            <input className="form-control" type="tel" required placeholder="Mobile No" id="mobileNo" />
			            <p id="mobileNoError"></p>
			            <input className="form-control" type="number" required placeholder="Pin Code" id="pinCode" />
			            <p id="pinCodeError"></p>
			            <input className="btn btn-primary" type="submit" value="Register" />
			        </form>
			    </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		register: register
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUP);