import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import { signIn } from '../../actions/signInActions';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.handleSignIn = this.handleSignIn.bind(this);
	}

	handleSignIn(event) {
		event.preventDefault();
		let data = {
			"phone_no": document.getElementById("mobileNo").value,
			"password": document.getElementById("password").value
		};
		this.props.signIn(data);
	}

	render() {
		return (
			<div>
				{
					this.props.logIn.showSuccessModal &&
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
			            	<h1 className="text-success">Sign-In Successful!</h1>
			          	</ModalDialog>
			        </ModalContainer>
			    }
			    <h1 className="text-center">Log-In</h1>
			    <div className="login-card">
			        <p className="profile-name-card"> </p>
			        <form className="form-signin" onSubmit={this.handleSignIn}><span className="reauth-email"> </span>
			            <input className="form-control" type="tel" required placeholder="Mobile No" id="mobileNo" />
			            <p id="mobileNoError"></p>
			            <input className="form-control" type="password" required placeholder="Password" id="password" />
			            <p id="passwordError"></p>
			            <input className="btn btn-primary" type="submit" value="Log-In" />
			        </form>
			    </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		logIn: state.logIn
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		signIn: signIn
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);