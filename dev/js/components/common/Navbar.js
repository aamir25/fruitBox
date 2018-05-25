import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { browserHistory } from "react-router";

import { logout } from "../../actions/authActions";

import { getCookie, setCookie } from "../../utils/cookieHelper";

export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		setCookie("");
		browserHistory.push("/");
	}

	render() {
		let loggedInNavbar = (
			<div className="col-lg-3 col-md-4 col-sm-4 text-right fh5co-link-wrap">
				<ul className="fh5co-special" data-offcanvass="yes">
					<li><Link to="/signIn">Login</Link></li>
					<li><Link to="/signUp" className="call-to-action">Get Started</Link></li>
				</ul>
			</div>
		);

		let loggedOutNavbar = (
			<div className="col-lg-3 col-md-4 col-sm-4 text-right fh5co-link-wrap">
				<ul className="fh5co-special" data-offcanvass="yes">
					<li><button onClick={ () => { this.handleLogout() } } className="btn btn-success btn-sm">Logout</button></li>
				</ul>
			</div>
		);

		return (
			<nav className="fh5co-nav-style-1" role="navigation" data-offcanvass-position="fh5co-offcanvass-left">
				<div className="container">
					<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 fh5co-logo">
						<a className="js-fh5co-mobile-toggle fh5co-nav-toggle"><i></i></a>
						<Link to="/">The Fruit Basket</Link>
					</div>
					<div className="col-lg-6 col-md-5 col-sm-5 text-center fh5co-link-wrap">
						<ul data-offcanvass="yes">
							<li className="active"><Link to="/">Home</Link></li>
							<li><Link to="/fruits">Fruits</Link></li>
							<li><Link to="/cakes">Cakes & Pies</Link></li>
							<li><Link to="/cart">Cart</Link></li>
						</ul>
					</div>
					{ (getCookie("apiKey") == "") ? loggedInNavbar : loggedOutNavbar }
				</div>
			</nav>			
		);
	}
}